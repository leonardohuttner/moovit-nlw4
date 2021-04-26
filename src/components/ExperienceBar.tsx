import { useContext } from 'react'
import { ChallengeContext} from '../contexts/ChallengeContext'
import styles from '../Styles/components/ExperienceBar.module.css'
export function ExperienceBar(){
    const { currentExperience, experieceToNextLevel } = useContext(ChallengeContext)

    const percentToNextLevel =  Math.round(currentExperience * 100) / experieceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}%`}}/>
                <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experieceToNextLevel} xp</span>
        </header>
    )
}