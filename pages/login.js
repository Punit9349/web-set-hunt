import React, { useRef } from 'react'
// import styles from '../styles/Home3.module.css';
import {signIn,useSession,signOut} from 'next-auth/react';;
import bg_login from '../public/bg_login.png';
import micro from '../public/microbus.jpeg';
import google from '../public/google.svg';
import facebook from '../public/facebook.png';
import insta from '../public/insta.png';


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
    // <div className={styles.Body}>
    //     <div className={styles.maindiv}>
    //     <h1 className={styles.h1}>log in</h1>
    //     <picture><img className={styles.img} src="google.png" alt="Google" onClick={()=>signIn("google")}/></picture>
    //     <div className={styles.h3}><h3>or</h3></div>
    //     <div className={styles.inputs}>
    //       <div className={styles.Fields}>
    //         <div className={styles.Fieldset}>
    //           <div className={styles.input}><input type="email" className={styles.Before_FS} required="true" autoComplete="off" ref={emailRef}/></div>
    //           <h1 className={styles.Fs_H}><span className={styles.span}>Email</span></h1>
    //           <div className={styles.label}><label className={styles.placeholder}>Email or phone</label></div>
    //         </div>
    //       </div>
    //       <div className={styles.Fields}>
    //         <div className={styles.Fieldset}>
    //           <input type="password" className={styles.Before_FS} required="true" ref={passwordRef} />
    //           <div className={styles.h12}><h1 className={styles.Fs_H}><span className={styles.span}>Password</span></h1></div>
    //           <label className={styles.placeholder}>Password</label>
    //         </div>
    //       </div>

    //     </div>
    //       <button className={styles.button} onClick={submitHandler}>Log in</button>
    //   </div>
    // </div>
    <>
    
    <style jsx>
    {`
        .bg-pos{
           background-size : 100% !important;
           background-color : black !important;
  
        }
        `}
    </style>
    

    <div className='h-screen w-full relative'>
      <div className='px-8 w-full h-full bg-pos no-repeat ' style={{'background':`url(${bg_login.src})`}}>
          <div className='w-full flex justify-center items-center py-6 overflow-hidden'>
            <img className='w-12' src={micro.src} alt="micro" />
          </div>
          <h1 className='text-xl lg:text-3xl font-semibold text-center text-neon mb-3 lg:mb-4'>Log in</h1>
          <div className='flex justify-center items-center mb-3'>
            <img className='w-10 rounded-md' src={google.src} alt="google" />
          </div>
          <p className='text-center text-white text-lg mb-3'>or</p>

          <div className='flex justify-center'>
            <form className='w-full lg:w-1/5'>
                <div className='mb-6'>
                  <label className='text-white font-semibold text-lg' for="email">Email</label> <br/>
                  <input className='bg-neon px-2 py-1 lg:px-4 lg:py-2 text-gray-700 text-lg mt-2 w-full' type="email" id="email"  name="email" placeholder='Email'/>
                </div>
                <div className='mb-10'>
                  <label className='text-white font-semibold text-lg' for="pass">Password</label> <br/>
                  <input className='bg-neon px-2 py-1 lg:px-4 lg:py-2 text-gray-700 text-lg mt-2 w-full ' type="password" id="pass"  name="password" placeholder='Password'/>
                </div>

                <div className='flex justify-center'>
                  <button className='px-12 py-1 rounded-full bg-neon font-semibold text-lg'>
                    Log in
                  </button>
                </div>
              </form>
          </div>
            
      </div>
      <div className='absolute bottom-0 left-0 px-8 py-4 flex gap-4 items-center text-white'>
        <img className='w-4 lg:w-6' src={facebook.src} alt="fb" /> microbus_nitkkr 
        <img className='w-4 lg:w-6' src={insta.src} alt="fb" /> microbusnitkkr 
      </div>
    </div>
    
    </>
    
  )
}

export default Login