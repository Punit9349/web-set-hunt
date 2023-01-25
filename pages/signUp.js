import React, { useRef } from 'react';
import { useDispatch} from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import SocialMediaFooter from '../components/SocialMediaFooter';
import { UPDATE_USER } from '../reducers/userReducer';
import styles from '../styles/Home4.module.css';
import networkRequest from '../utils/request';
import customToast from '../utils/toast';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const dispatch = useDispatch();

  async function signUpHandler(event) {
    event.preventDefault();
    if (!emailRef || !passwordRef || !rePasswordRef) {
      customToast('Fill all the input fields', 'warning');
      return;
    }
    if (passwordRef.current.value !== rePasswordRef.current.value) {
      customToast("The entered passwords don't match", 'warning');
      return;
    }
    const url = process.env.NEXTAUTH_URL + '/api/auth/signup';
    const data = {
      email: [emailRef.current.value],
      password: [passwordRef.current.value]
    };
    const result = await networkRequest('POST', url, data);
    if (Math.floor(Number(result.status) / 100) === 2) {
      dispatch(UPDATE_USER(result.data.user));
    }
    else {
      toast(result.data.message, 'failure');
    }
  }

  return (
    <>
      <ToastContainer />
      <div className={styles.signUpPage}>
        <div className={styles.signUpFormContainer}>
          <div className={styles.signUpFormMicroLogo}>

          </div>
          <div className={styles.signUpForm} >
            <h1>Create Account</h1>
            <label>Email</label>
            <input type='email' placeholder='Your email...' required ref={emailRef} />
            <label>Password</label>
            <input type='password' placeholder='Your password...' required ref={passwordRef} />
            <label>Re-enter Password</label>
            <input type='password' placeholder='Re-enter password...' required ref={rePasswordRef} />
            <input type='submit' value='Submit' onClick={signUpHandler} />
          </div>
        </div>
        <SocialMediaFooter />
      </div>
    </>
  )
}

export default SignUp