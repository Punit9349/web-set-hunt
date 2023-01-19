import React from 'react'
import styles from '../styles/Home3.module.css'

const Login = () => {
  return (
    <div className={styles.Body}>
        <div className={styles.maindiv}>
        <h1 className={styles.h1}>log in</h1>
        <picture><img className={styles.img} src="google.png" alt="Google"/></picture>
        <div className={styles.h3}><h3>or</h3></div>
        <div className={styles.inputs}>
          <div className={styles.Fields}>
            <div className={styles.Fieldset}>
              <div className={styles.input}><input type="text" className={styles.Before_FS} required="" autocomplete="off"/></div>
              <h1 className={styles.Fs_H}><span className={styles.span}>Email</span></h1>
              <div className={styles.label}><label className={styles.placeholder}>Email or phone</label></div>
            </div>
          </div>
          <div className={styles.Fields}>
            <div className={styles.Fieldset}>
              <input type="password" className={styles.Before_FS} required="" />
              <div className={styles.h12}><h1 className={styles.Fs_H}><span className={styles.span}>Password</span></h1></div>
              <label className={styles.placeholder}>Password</label>
            </div>
          </div>

        </div>
          <button className={styles.button}>Log in</button>
      </div>
    </div>
  )
}

export default Login