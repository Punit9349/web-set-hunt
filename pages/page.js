import React from "react";
import Link from "next/link";
import styles from "../styles/Home1.module.css";

const Page = () => {
  const img = "/background.svg";
  const mystyle = {
    width: "50vh",
    height: "45vh",
  };
  const mystyle1 = {
    width: "50vh",
    height: "35vh",
  };
  return (
    <>
      <style jsx>
        {`
          .part1 {
            background-image: url(${img});
            background-size: cover;
            background-height: 100%;
          }
        `}
      </style>
      <div className="part1 h-screen bg-black ">
        <div className={styles.container}>
          <div className={styles.banner}>
            <a className={styles.bannera}>
              <picture>
                <img src="/title.png" alt="Girl in a jacket" style={mystyle} />
              </picture>
            </a>
            <div className={styles.items}>
              <div className="absolute left-8 bottom-8 ">
                <div className="mb-2 lg:mb-3">
                  <div className="flex justify-center items-center gap-4 text-lg">
                    <Link
                      href="https://www.instagram.com/microbus_nitkkr/?hl=en"
                      className="href"
                    >
                      <img
                        src="/insta.png"
                        alt="Girl in a jacket"
                        className="w-8"
                      />{" "}
                    </Link>
                    microbus_nitkkr
                  </div>
                </div>

                <div className="mb-2 lg:mb-6">
                  <div className="flex justify-center items-center gap-4 text-lg">
                    <Link
                      href="https://www.instagram.com/microbus_nitkkr/?hl=en"
                      className="href"
                    >
                      <img
                        src="/facebook.png"
                        alt="Girl in a jacket"
                        className="w-8"
                      />{" "}
                    </Link>
                    microbus_nitkkr
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4 text-lg font-semibold ml-4">
                  <button className="px-6 py-1 rounded-full bg-purpleP hover:bg-purpleS transition-all duration-100">
                    Return
                  </button>
                  <button className="px-6 py-1 rounded-full bg-purpleP hover:bg-purpleS transition-all duration-100">
                    SOS
                  </button>
                </div>
              </div>
              <div className={styles.mid}>
                <div className={styles.image}>
                  <picture>
                    <img
                      src="/enterr.gif"
                      alt="Girl in a jacket"
                      className="w-24 lg:w-24"
                    />
                  </picture>
                </div>
                <div className="">
                  <a className="mt-2 lg:mt-4 text-3xl font-semibold">
                    <Link href="#">Enter</Link>
                  </a>
                </div>
              </div>
              <div className={styles.right}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
