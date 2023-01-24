import React from "react";
import styles from '../../styles/Home4.module.css';
import SocialMediaFooter from '../../components/SocialMediaFooter';
import NavBar from "../../components/NavBar";
import Leader from "../../components/leader";
import Questions from "../../components/questions";
import Profile from "../../components/profile";

const Leaderboard = () => {
  return (
    <>
        <div className={styles.gamingArena}>
          <div className={styles.gamingArenaMicrobusLogo}></div>
           {/* <Questions /> */}
          <div className="flex flex-row justify-between">
            <div>
            <NavBar />
            </div>
            <div className="">

            <Leader/>
            </div>
          </div>
          <div>
           <SocialMediaFooter />
           </div>
        </div>
    </>
  );
};

export default Leaderboard;