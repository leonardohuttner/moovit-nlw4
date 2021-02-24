import { createContext, useState, ReactNode} from 'react';



interface ChallengeContextData{
    level:number;
    currentExperience:number;
    challengeCompleted: number;
    levelUp: ()=> void;
    startNewChallenge: ()=> void;

}

interface ChallengesProviderProps{
    children: ReactNode;
}
export const ChallengeContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level,setLevel] = useState(1)
    const [currentExperience, setCrrentExperience] = useState(0)
    const [challengeCompleted, setChallengeCompleted] = useState(0)



    function levelUp(){
        setLevel(level + 1 )
    }

    function startNewChallenge(){
        console.log('newChallenge!')
    }
    return (
        <ChallengeContext.Provider
        value={{
            level,
            levelUp,
            currentExperience,
            challengeCompleted,
            startNewChallenge,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}
