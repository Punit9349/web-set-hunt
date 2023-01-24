import React from 'react';
import styles from '../styles/Home4.module.css';

function Questions() {
  return (
    <div className={styles.gAquestionsComponent}>
    <div className={styles.gAquestionsContainer}>

    </div>
    <div className={styles.gAAnswersContainer}>
    <label>Your Answer</label>
    <input type='text' placeholder='Your answer' required/>
    </div>
  </div>
  )
}

export default Questions;