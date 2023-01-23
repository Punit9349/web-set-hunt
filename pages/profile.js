import React from "react";
import styles from "../styles/Home2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import SocialMediaFooter from "../components/SocialMediaFooter";

const Teammember = () => {
  const img = "/background.svg";
  return (
    <>
      <style jsx>
        {`
              .part1{
                background-image: url(${img});
                background-size: cover;
                background-height:100%
                padding-top:0px;
              
              }
              `}
      </style>
      <div className="part1 bg-black h-screen">
        <div className={styles.body}>
          <section>
            <div className={styles.HSbar}>
              <div className={styles.HSbar1}>
                <Link className={styles.a} href="#">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </div>
              <div className={styles.HSbar1}>
                <Link className={styles.a} href="#">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </div>
              <div className={styles.HSbar1}>
                <Link className={styles.a} href="#">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </div>
              <div className={styles.HSbar1}>
                <Link className={styles.a} href="#">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </div>
              <div className={styles.HSbar1}>
                <Link className={styles.a} href="#">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link>
              </div>
            </div>
          </section>

          {/* logo and heading */}

          <div className="pt-4">
          <a><picture><img className={styles.logo} src="/microbus.jpeg" alt="" /></picture></a>
          </div>

          <div className="text-4xl pr-16">
            <div className={styles.team_page_heading}>Team Members</div>
          </div>

          {/* <!-- main --> */}

          <section>
            <div className={styles.details_section}>
              <div>
                <div className={styles.img_1}>
                  <Link className={styles.a} href="#">
                    <FontAwesomeIcon icon={faUser} size="2xl" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-row">
                <div className={styles.detail_type}>
                  <h4>Name</h4>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className={styles.detail_type}>
                  <h4>Email</h4>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="username@email.com"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                {/* col col-lg-6 col-md-12 col-sm-12 */}
                <div className={styles.detail_type}>
                  <h4>Phone Number</h4>
                  <input
                    className={styles.input}
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="eg. 9999123456"
                  />
                </div>
                <div className={styles.detail_type}>
                  <h4>Roll Number</h4>
                  <input
                    className={styles.input}
                    type="number"
                    name="roll"
                    id="roll"
                    placeholder="eg. 12115071"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* 
        <!-- socials --> */}
          {/* <div className={styles.socials}>
            <div className="flex flex-row">
              <Link className={styles.a} href="#">
                <img
                  className={styles.socials_logo}
                  src="/facebook.png"
                  alt="fb logo"
                />
              </Link>
              <Link className={styles.a} href="#">
                microbus_nitkkr
              </Link>
            </div>
            <Link className={styles.a} href="#">
              <img
                className={styles.socials_logo}
                src="/insta.png"
                alt="fb logo"
              />
            </Link>
            <Link className={styles.a} href="#">
              microbus_nitkkr
            </Link>
          </div> */}
          <SocialMediaFooter />
        </div>
      </div>
    </>
  );
};

export default Teammember;
