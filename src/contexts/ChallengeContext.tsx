import { createContext, useState, ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json';

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
}

interface ChallengesProviderProps{
    children: ReactNode;
}
export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level,setLevel] = useState(1)
    const [currentExperience, setCrrentExperience] = useState(0)
    const [challengeCompleted, setChallengeCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experieceToNextLevel = Math.pow((level + 1) * 4 , 2)

    useEffect(()=>{
        Notification.requestPermission()
    }, [])

    function levelUp(){
        setLevel(level + 1 )
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
        setCrrentExperience(finalExperience);
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
            levelUp,
            startNewChallenge,
            resetChallenge,
            completedChallenge,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}
