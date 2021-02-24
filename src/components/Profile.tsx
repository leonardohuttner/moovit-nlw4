import styles from '../Styles/pages/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
           <img src="https://github.com/leonardohuttner.png" alt="Leonardo"/>
           <div>
                <strong>Leonardo Huttner</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}