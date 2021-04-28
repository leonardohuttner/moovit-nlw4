import { createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengeContextData{
    level:number;
    currentExperience:number;
    challengeCompleted: number;
    experieceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: ()=> void;
    startNewChallenge: ()=> void; 
    resetChallenge: ()=> void;
    completedChallenge: ()=> void;
    closeLevelUp:()=> void;
}

interface ChallengesProviderProps{
    children: ReactNode;
    level:number,
    currentExperience:number,
    challengesCompleted:number
}

export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){
    const [level,setLevel] = useState(rest.level ?? 1 )
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengesCompleted ?? 0)

    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen,setIsLevelUpModalOpen] = useState(false)

    const experieceToNextLevel = Math.pow((level + 1) * 4 , 2)

    useEffect(()=>{
        Notification.requestPermission()
    }, [])

    useEffect(()=> {
        Cookies.set(`level`,String(level))
        Cookies.set(`currentExperience`,String(currentExperience))
        Cookies.set(`challengeCompleted`,String(challengeCompleted))
    },[level, currentExperience,challengeCompleted])

    function levelUp(){
        setLevel(level + 1 )
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUp(){
        setIsLevelUpModalOpen(false)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex] 

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()
        if(Notification.permission === 'granted'){
            new Notification('Novo desafio 🎉✨',{
                body:` Valendo ${challenge.amount}xp MAOEEE!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completedChallenge(){
        if(!activeChallenge){
            return;
        }
        const { amount } = activeChallenge
        
        let finalExperience = currentExperience + amount

        if(finalExperience >= experieceToNextLevel){
            finalExperience = finalExperience-experieceToNextLevel
            levelUp()
        }
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1)
    }

    return (
        <ChallengeContext.Provider
        value={{
            level,
            currentExperience,
            challengeCompleted,
            activeChallenge,
            experieceToNextLevel,
            closeLevelUp,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completedChallenge,
            }}
        >
            {children}
            {isLevelUpModalOpen && <LevelUpModal/>}
        </ChallengeContext.Provider>
    )
}
