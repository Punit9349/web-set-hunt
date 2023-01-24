import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from '../styles/Home4.module.css';

const Profile = () => {
  return (
    <>
      <div className={styles.profileContainer}>
            <div className={styles.profileSection}>
            <div className={styles.profilePicture}>
                  <Link className={styles.a} href="#">
                    <FontAwesomeIcon icon={faUser} size="2xl" />
                  </Link>
                </div>
              <div className={styles.profileDetails}>
                <div className={styles.profileDetail}>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className={styles.profileDetail}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="username@email.com"
                    required
                  />
                </div>
                <div className={styles.profileDetail}>
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="eg. 9999123456"
                    required
                  />
                </div>
                <div className={styles.profileDetail}>
                  <label>Roll Number</label>
                  <input
                    type="number"
                    name="roll"
                    id="roll"
                    placeholder="eg. 12115071"
                    required
                  />
                </div>
              </div>
              

        </div>
      </div>
    </>
  );
};

export default Profile;
