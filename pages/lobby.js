import React, { useEffect } from "react";
import styles from '../styles/Home4.module.css';
import SocialMediaFooter from '../components/SocialMediaFooter';
import NavBar from "../components/NavBar";
import Questions from "../components/questions";
import Profile from "../components/profile";
import { useDispatch, useSelector } from "react-redux";
import Leader from "../components/leader";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { UPDATE_USER } from "../reducers/userReducer";

const Lobby = () => {
  const lobbyValue = useSelector((state) => {
    return state.lobby;
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      dispatch(UPDATE_USER(session?.user));
      router.push('/login');
    }
  }, [session, status]);

  return (
    <>
      <NavBar />
      <div className={styles.gamingArena}>
        <div className={styles.gamingArenaMicrobusLogo}>

        </div>
        {lobbyValue === 0 ? <Questions /> :
          lobbyValue === 1 ? <Profile /> :
            lobbyValue === 2 ? <Leader /> : <></>}

      </div>
      <SocialMediaFooter />
    </>
  );
};

export default Lobby;
