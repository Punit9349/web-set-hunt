import React from "react";
import styles from '../../styles/Home4.module.css';
import SocialMediaFooter from '../../components/SocialMediaFooter';
import NavBar from "../../components/NavBar";

const Gamingarena = () => {
  const img = "/background.svg";
  return (
    <>
        <NavBar />
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
    </>
  );
};

export default Gamingarena;
