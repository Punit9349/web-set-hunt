import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CgProfile } from 'react-icons/cg';
import networkRequest from '../utils/request';

const Leader = () => {

  useEffect(()=>{
    async function fetchLeaderBoard(){
      const url = process.env.NEXTAUTH_URL+'/api/leaderBoard';
      const response = await networkRequest('GET',url,{});
      console.log(response);
    }
    fetchLeaderBoard();
  },[]);
  return (
    <div className='flex flex-col mx-12'>
        <div className='text-[#D5FC34] text-3xl font-semibold my-2'>Leaderboard</div>

        <div className='flex flex-row justify-between my-2'>
          <div className='flex flex-col w-72 mt-3 mr-8 rounded-md bg-[#D5FC34] opacity-70 items-center justify-center'>
            <div className='pb-4'>  <CgProfile size='40' color='white' /></div>
            <div className='text-white font-bold'>Name</div>
          </div>
          <div className='flex flex-col w-72 mr-8 rounded-md bg-[#D5FC34] opacity-70 items-center justify-center'>
            <div className='my-2 pt-3'>  <CgProfile size='40' color='white' /></div>
            <div className='text-white font-bold mt-2 mb-4'>Name</div>
          </div>
          <div className='flex flex-col w-72 mt-3  rounded-md bg-[#D5FC34] opacity-70 items-center justify-center'>
            <div className='pb-4'>  <CgProfile size='40' color='white' /></div>
            <div className='text-white font-bold'>Name</div>
          </div>
        </div>

        <div className='flex flex-row justify-between items-center bg-[#9537FF] opacity-85 rounded-md h-11 mt-5'>
          <div className='flex flex-row my-2'>
          <div className='ml-3'><CgProfile size='40' color='white'/></div>
          <div className='text-white pl-5 mt-1 text-bold'>Name</div>
          </div>
          <div className='mr-4 font-semi text-black text-2xl bg-[#D5FC34] rounded-full h-8 w-8 flex justify-center items-center'>4</div>
        </div>


        <div className='flex flex-row justify-between items-center bg-[#9537FF] opacity-85 rounded-md h-11 mt-1.5'>
          <div className='flex flex-row my-2'>
          <div className='ml-3'><CgProfile size='40' color='white' /></div>
          <div className='text-white pl-5 mt-1 text-bold'>Name</div>
          </div>
          <div className='mr-4 font-semi text-black text-2xl bg-[#D5FC34] rounded-full h-8 w-8 flex justify-center items-center'>5</div>
        </div>

        <div className='text-lg text-[#D5FC34] font-sans mt-4'>Your Position</div>

        <div className='flex flex-row justify-between items-center bg-[#9537FF] opacity-85 rounded-md h-4/12 mt-1.5'>
          <div className='flex flex-row my-2'>
          <div className='ml-3'><CgProfile size='40' color='white' /></div>
          <div className='text-white pl-5 mt-1 text-bold'>Name</div>
          </div>
          <div className='mr-4 font-semi text-black text-2xl bg-[#D5FC34] rounded-full h-8 w-8 flex justify-center items-center'>8</div>
        </div>
    </div>
  )
}

export default Leader