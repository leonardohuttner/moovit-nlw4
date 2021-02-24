import { useState, useEffect, useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../Styles/pages/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const { startNewChallenge } = useContext(ChallengeContext)

    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft,minuteRigth] = String(minutes).padStart(2,'0').split('')
    const [secondsLeft,secondsRigth] = String(seconds).padStart(2,'0').split('')

    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1 * 60)
    }

    function startCountdown(){
        setIsActive(true);

    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1)
            },1000)
        } else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    },[isActive,time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRigth}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                disabled
                className={styles.CountdownButton}
            >
                Ciclo encerrado
            </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                            type='button'
                            className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ):(
                        <button
                            type='button'
                            className={styles.CountdownButton}
                            onClick={startCountdown}
                     >
                            Começar um ciclo
                        </button>
                    )}
                </>
            ) }

        </div>
    )
}