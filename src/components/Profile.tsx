import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../Styles/pages/Profile.module.css'

export function Profile(){
    const {level} =  useContext(ChallengeContext)
    return(
        <div className={styles.profileContainer}>
           <img src="https://github.com/leonardohuttner.png" alt="Leonardo"/>
           <div>
                <strong>Leonardo Huttner</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}