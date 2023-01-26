import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_LEADER } from "../reducers/leaderReducer";
import networkRequest from "../utils/request";
import LeaderBoardEntry from "./leaderBoardEntry";

const Leader = () => {
  const leaderBoard = useSelector((state) => state.leader);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(leaderBoard);
  useEffect(() => {
    async function fetchLeaderBoard() {
      const url = process.env.NEXTAUTH_URL + "/api/leaderBoard";
      const response = await networkRequest("GET", url, {});
      console.log(response);
      if (response.status === 200) {
        console.log(response.data.leaderboard);
        dispatch(UPDATE_LEADER(response.data.leaderboard));
      }
    }
    fetchLeaderBoard();
  }, []);

  // console.log(leaderBoard);
  return leaderBoard && leaderBoard.length > 0 && user ? (
    <>
      <div className="flex flex-col mx-12">
        <div className="text-[#D5FC34] text-3xl font-semibold my-2">
          Leaderboard
        </div>

        <div className="flex flex-row justify-between my-2">
          <div className="flex flex-col w-72 mt-3 mr-8 rounded-md relative bg-[#D5FC34] bg-opacity-70 items-center justify-center">
            <div className="">
              <a>
                <img
                  src="/31.png"
                  className="h-16 w-16 absolute -mt-4 top-0 right-1"
                  alt=""
                />
              </a>
            </div>
            <div className="pb-4">
              {" "}
              <CgProfile size="40" color="white" />
            </div>
            <div className="text-white font-bold">
              {leaderBoard[0].teamName}
            </div>
          </div>
          <div className="flex flex-col w-72 mr-8 rounded-md relative bg-[#D5FC34] bg-opacity-70 items-center justify-center">
            <div className="flex justify-center pr-16">
              <a>
                <img
                  src="/32.png"
                  className=" top-0 h-16 absolute w-16 -mt-11"
                  alt=""
                />
              </a>
            </div>
            <div className="my-2 pt-3">
              {" "}
              <CgProfile size="40" color="white" />
            </div>
            <div className="text-white font-bold mt-2 mb-4">
              {leaderBoard[1].teamName}
            </div>
          </div>
          <div className="flex flex-col w-72 mt-3  rounded-md bg-[#D5FC34] relative bg-opacity-70 items-center justify-center">
            <div className="">
              <a>
                <img
                  src="/33.png"
                  className="h-16 w-16 -mt-4 absolute top-0 left-1"
                  alt=""
                />
              </a>
            </div>
            <div className="pb-4">
              {" "}
              <CgProfile size="40" color="white" />
            </div>
            <div className="text-white font-bold">
              {leaderBoard[2].teamName}
            </div>
          </div>
        </div>

        {leaderBoard && leaderBoard[3] ? (
          <LeaderBoardEntry item={leaderBoard[3]} />
        ) : (
          <></>
        )}
        {leaderBoard && leaderBoard[4] ? (
          <LeaderBoardEntry item={leaderBoard[4]} />
        ) : (
          <></>
        )}

        <div className="text-lg text-[#D5FC34] font-sans mt-4">
          Your Position
        </div>

        {leaderBoard.map((entry, index) => {
          if (entry.teamId === user.teamId) {
            return (
              <div
                key={index}
                className="flex flex-row justify-between items-center bg-[#9537FF] opacity-85 rounded-md h-4/12 mt-1.5"
              >
                <div className="flex flex-row my-2 justify-center">
                  <div className="ml-3">
                    <CgProfile size="40" color="white" />
                  </div>
                  <div className="text-white pl-5 mt-1 text-bold flex flex-col justify-center">
                    <div>{entry.teamName}</div>
                    <div>
                      {entry && entry.members ? (
                        entry.members.map((member, index) => {
                          return <span key={index}>{member.name} </span>;
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mr-4 font-semi text-black text-2xl bg-[#D5FC34] rounded-full h-8 w-8 flex justify-center items-center">
                  {index + 1}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Leader;
