import { createContext, useState, ReactNode} from 'react';
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

    function levelUp(){
        setLevel(level + 1 )
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex] 

        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
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
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}
