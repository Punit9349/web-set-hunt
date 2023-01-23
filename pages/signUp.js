import React from 'react';
import SocialMediaFooter from '../components/SocialMediaFooter';
import styles from '../styles/Home4.module.css';

const SignUp = () => {
  const img = "/background.svg";
  const img1 = "/1.svg";
  return (
    <>
      <div className={styles.signUpPage}>
        <div className={styles.signUpFormContainer}>
          <div className={styles.signUpFormMicroLogo}>

          </div>
          <div className={styles.signUpForm} >
            <h1>Create Account</h1>
            <label>Email</label>
            <input type='email' placeholder='Your email...' required />
            <label>Password</label>
            <input type='password' placeholder='Your password...' required />
            <label>Re-enter Password</label>
            <input type='password' placeholder='Re-enter password...' required />
            <input type='submit' value='Submit' />
          </div>
        </div>
        <SocialMediaFooter />
      </div>
    </>
  )
}

export default SignUp