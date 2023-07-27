import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import Layout from "../components/layout";
import SocialMediaFooter from "../components/SocialMediaFooter";
import styles from "../styles/Home4.module.css";
import networkRequest from "../utils/request";
import customToast from "../utils/toast";
import google from "../public/google.svg";
import Link from "next/link";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  const router = useRouter();
  const { data: session, status } = useSession();


  useEffect(() => {
    if (status !== "loading") {
      if (status === "authenticated") {
        router.push("/lobby");
      }
    }
  }, [session, status]);

  async function signUpHandler(event) {
    event.preventDefault();
    // console.log(process.env.NEXTAUTH_URL)
    if (!emailRef || !passwordRef || !rePasswordRef) {
      customToast("Fill all the input fields", "warning");
      return;
    }
    if (passwordRef.current.value !== rePasswordRef.current.value) {
      customToast("passwords mismatch", "warning");
      return;
    }
    const url = process.env.NEXTAUTH_URL + "/api/auth/signup";
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    const result = await networkRequest("POST", url, data);
    // console.log(result);
    if (Math.floor(Number(result.status) / 100) === 2) {
      customToast("account created, login", "success");
      router.push("/login");
    } else {
      toast(result?.data?.message, "failure");
    }
  }

  async function handleSignInGoogle() {
    const response = await signIn("google", { callbackUrl: "/lobby" });
    // console.log(response);
  }

  return (
    <>
      <Layout>
        <ToastContainer theme="colored"/>
        <div className={styles.signUpPage}>
          <div className={styles.signUpFormContainer}>
            {/* <div className={styles.signUpFormMicroLogo}></div> */}
            <div className={styles.signUpForm}>
              <h1>Create Account</h1>
              <div
                className="flex justify-center items-center mb-3 cursor-pointer"
                onClick={handleSignInGoogle}
              >
                <img
                  className="w-10 rounded-md"
                  src={google.src}
                  alt="google"
                />
              </div>
              <h4>or</h4>
              <label>Email</label>
              <input
                type="email"
                placeholder="Your email..."
                required
                ref={emailRef}
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Your password..."
                required
                ref={passwordRef}
              />
              <label>Re-enter Password</label>
              <input
                type="password"
                placeholder="Re-enter password..."
                required
                ref={rePasswordRef}
              />
              <input type="submit" value="Submit" onClick={signUpHandler} />
              <Link href='/login'><p className='text-xl font-bold cursor-pointer' style={{color:'#9537FF',width:'100%',textAlign:'center'}}>Already have an account?</p></Link>
            </div>
          </div>
          <SocialMediaFooter />
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
