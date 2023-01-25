import React, { useState } from "react";
import styles from '../styles/Home4.module.css';
import SocialMediaFooter from '../components/SocialMediaFooter';
import NavBar from "../components/NavBar";
import Questions from "../components/questions";
import Profile from "../components/profile";
import { useSelector } from "react-redux";
import Leader from '../components/leader';

const Lobby = () => {
  const lobbyValue = useSelector((state)=>{
    return state.lobby;
  });
  return (
    <>
        <NavBar />
        <div className={styles.gamingArena}>
          <div className={styles.gamingArenaMicrobusLogo}>

          </div>
          {lobbyValue===0?<Questions />:
          lobbyValue===1?<Profile />:
          lobbyValue===2?<Leader />:<></>}
           
        </div>
        <SocialMediaFooter />
    </>
  );
};

export default Lobby;
