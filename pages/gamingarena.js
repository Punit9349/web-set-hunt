import React from "react";
import Link from "next/link";

const Gamingarena = () => {
  const img = "/background.svg";
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

      <div className="part1 bg-black h-screen">
        <div className="flex flex-row justify-between">
          <div className="text-3xl pt-12 text-[#D5FC34] font-bold mx-28 pr-16 opacity-0">
            Gaming Arena
          </div>
          <div className="mt-6 mb-5">
            <a>
              <picture>
                <img
                  src="/microbus.jpeg"
                  alt=""
                  className="h-18 w-20 flex justify-center"
                />
              </picture>
            </a>
          </div>
          <div className="text-3xl pt-14 text-[#D5FC34] font-bold mx-28 pr-10">
            Gaming Arena
          </div>
        </div>

        <div className="bg-[#9537FF] mx-24 rounded-3xl flex opacity-70 h-3/4">
          <div className="w-1/2">
            <div className="flex justify-center items-center text-white text-lg font-bold">
              Hint
            </div>
            <div className="h-9/10 bg-white rounded-3xl mx-6 mb-2 opacity-95"></div>
          </div>
          <div className="flex items-center justify-center flex-col w-1/2 pr-44">
            <div className="text-white font-bold text-xl">Your Answer</div>
            <div className="pl-16 my-2">
              <input
                className="p-2 bg-black opacity-75 text-white"
                type="text"
                name="name"
                placeholder="Answer"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-row">
            <div className="flex flex-row justify-start">
              <div>
                <Link
                  href="https://www.facebook.com/microbusnitkkr"
                  className="href"
                >
                  <picture>
                    <img
                      className="w-7 h-7 mr-1.5 ml-3 mt-3"
                      src="/facebook.png"
                      alt="Girl in a jacket"
                    />
                  </picture>
                </Link>
              </div>
              <div className="text-white mt-3">microbus_nitkkr</div>
            </div>
            <div className="flex flex-row justify-start">
              <div>
                <Link
                  href="https://www.instagram.com/microbus_nitkkr/?hl=en"
                  className="href"
                >
                  <picture>
                    <img
                      className="w-7 h-7 mr-1.5 ml-3 mt-3"
                      src="/insta.png"
                      alt="Girl in a jacket"
                    />
                  </picture>
                </Link>
              </div>
              <div className="text-white mt-3">microbus_nitkkr</div>
            </div>
          </div>
          {/* <a><picture><img src="/social_handel.svg" alt="" className='h-12 flex justify-center' /></picture></a> */}
        </div>
      </div>
    </>
  );
};

export default Gamingarena;
