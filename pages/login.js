import React, { useRef } from 'react'
import styles from '../styles/Home3.module.css';
import {signIn,useSession,signOut} from 'next-auth/react';

const Login = () => {
  const emailRef= useRef();
  const passwordRef= useRef();
  const {data:session}=useSession();
  
  async function submitHandler(event){
    event.preventDefault();
    const result = await signIn('credentials',{
      redirect:false,
      email:emailRef.current.value,
      password:passwordRef.current.value
    });
    console.log(result);
  }

  if(session){
    return <div>Welcome {session.user.email}
    <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  }

  return (
    <div className={styles.Body}>
        <div className={styles.maindiv}>
        <h1 className={styles.h1}>log in</h1>
        <picture><img className={styles.img} src="google.png" alt="Google" onClick={()=>signIn("google")}/></picture>
        <div className={styles.h3}><h3>or</h3></div>
        <div className={styles.inputs}>
          <div className={styles.Fields}>
            <div className={styles.Fieldset}>
              <div className={styles.input}><input type="email" className={styles.Before_FS} required="true" autoComplete="off" ref={emailRef}/></div>
              <h1 className={styles.Fs_H}><span className={styles.span}>Email</span></h1>
              <div className={styles.label}><label className={styles.placeholder}>Email or phone</label></div>
            </div>
          </div>
          <div className={styles.Fields}>
            <div className={styles.Fieldset}>
              <input type="password" className={styles.Before_FS} required="true" ref={passwordRef} />
              <div className={styles.h12}><h1 className={styles.Fs_H}><span className={styles.span}>Password</span></h1></div>
              <label className={styles.placeholder}>Password</label>
            </div>
          </div>

        </div>
          <button className={styles.button} onClick={submitHandler}>Log in</button>
      </div>
    </div>
  )
}

export default Login