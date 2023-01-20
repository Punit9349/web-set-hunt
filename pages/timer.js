import React from 'react'
import { useState } from 'react'
import styles from '../styles/Home4.module.css'

const Timer = () => {
    // const techSpardhaEve = '26 Jan 2023';
    // const [days, setdays] = useState(second)
  return (
    <div className={styles.body}>
        <h1 className={styles.h1}>Coming Soon</h1>
            <div className={styles.countdown_container}>
                <div className={styles.countdown_ele}>
                    <p className={styles.big_text} id="days">0</p>
                    <span className={styles.labels}>Days</span>
                </div>
                <div className={styles.countdown_ele}>
                    <p className={styles.big_text} id="hours">0</p>
                    <span className={styles.labels}>hours</span>
                </div>
                <div className={styles.countdown_ele}>
                    <p className={styles.big_text} id="mins">0</p>
                    <span className={styles.labels}>mins</span>
                </div>
                <div className={styles.countdown_ele}>
                    <p className={styles.big_text} id="seconds">0</p>
                    <span className={styles.labels}>seconds</span>
                </div>
            </div>
    </div>
  )
}

export default Timer