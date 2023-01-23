import React from "react";
import styles from '../styles/Home4.module.css';
import SocialMediaFooter from '../components/SocialMediaFooter';

const Gamingarena = () => {
  const img = "/background.svg";
  return (
    <>
      <div >
        <div className={styles.gamingArena}>
          <div className={styles.gamingArenaMicrobusLogo}>

          </div>
            <div className={styles.gAquestionsComponent}>
              <div className={styles.gAquestionsContainer}>

              </div>
              <div className={styles.gAAnswersContainer}>
              <label>Your Answer</label>
              <input type='text' placeholder='Your answer' required/>
              </div>
            </div>
        </div>
        <SocialMediaFooter />
      </div>
    </>
  );
};

export default Gamingarena;
