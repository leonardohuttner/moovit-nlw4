import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../Styles/pages/CompletedChallenges.module.css'

export function CompletedChallenges(){
    const {challengeCompleted} = useContext(ChallengeContext)
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}