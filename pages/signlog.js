import React from 'react'
import myGif from './../public/circle1.gif'
import myGif1 from './../public/traingle1.gif'
import Image from 'next/image';

const Signlog = () => {
    const img = "/background.svg";
    const img1 = "/1.svg";
  return (
    <>
     <style jsx>
          {`
              .part1{
                background-image: url(${img});
                background-size: cover;
                background-height:100%;
        
              }
              .part{
                background-image: url(${img1});
                // background-size: cover;
                background-height:20%;
        
              }
              `}
        </style>
    <div className='part1 h-screen bg-black'>
         <div className='flex items-center justify-center pt-6'><picture><img className='w-16 h-16' src="/microbus.jpeg" alt="" /></picture></div>
         <div className='flex flex-row justify-center'>
          <div className='flex justify-center items-center'><Image className='' src={myGif} alt="my gif" height={130} width={130}/></div>
         <div>
          <div className='flex justify-center items-center pt-1'><Image src={myGif1} alt="my gif" height={145} width={145} /></div>
         </div>
         </div>


         <div className=''>hola</div>
         <div></div>
    </div>
    </>
  )
}

export default Signlog