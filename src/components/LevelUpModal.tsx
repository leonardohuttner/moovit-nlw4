import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../Styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
    const { level,closeLevelUp } = useContext(ChallengeContext)
     return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns!</strong>
                <p>Você chegou no proximo level</p>
                <button type='button'>
                    <img src="/icons/close.svg" alt="" onClick={() => closeLevelUp()}/>
                </button>
            </div>
        </div>
    )
}