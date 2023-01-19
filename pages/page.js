import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home1.module.css'

const Page = () => {
    const img = "/background.svg";
    const mystyle = {
        width:'50vh',
        height:'45vh'
      };
    const mystyle1 = {
        width: '50vh',
        height:'35vh'
      };
  return (
    <>
    <style jsx>
    {`
        .part1{
          background-image: url(${img});
          background-size: cover;
          background-height:100%;
  
        }
        `}
  </style>
    <div className='part1 h-screen bg-black'>
         <div className={styles.container}>
          <div className={styles.banner}>
            <a className={styles.bannera}><picture><img src="/title.png" alt="Girl in a jacket" style={mystyle}/></picture></a>
            <div className={styles.items}>
                <div className={styles.left}>
                    <div className={styles.link}>
                    <Link href="https://www.instagram.com/microbus_nitkkr/?hl=en" className="href"><img src="/insta.png" alt="Girl in a jacket" style={{width:"30px",height:"30px"}}/>    microbus_nitkkr</Link>

                    <Link href="https://www.instagram.com/microbus_nitkkr/?hl=en" className="href"><img src="/facebook.png" alt="Girl in a jacket" style={{width:"30px",height:"30px"}}/>    microbus_nitkkr</Link>
                    </div>
                    <div className={styles.button}>
                        <button>Return</button>
                        <button>SOS</button>
                    </div>
                </div>
                <div className={styles.mid}>
                    <div className={styles.image}>
                    <picture><img src="/enterr.gif" alt="Girl in a jacket" style={mystyle1}/></picture>
                    </div>
                    <a><Link href="#" className="href">Enter</Link></a>
                </div>
                <div className={styles.right}></div>

            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Page