import React from "react";
import styles from '../../styles/Home4.module.css';
import SocialMediaFooter from '../../components/SocialMediaFooter';
import NavBar from "../../components/NavBar";
import Questions from "../../components/questions";
import Profile from "../../components/profile";

const Gamingarena = () => {
  return (
    <>
        <NavBar />
        <div className={styles.gamingArena}>
          <div className={styles.gamingArenaMicrobusLogo}>

          </div>
           {/* <Questions /> */}
           <Profile />
        </div>
        <SocialMediaFooter />
    </>
  );
};

export default Gamingarena;
