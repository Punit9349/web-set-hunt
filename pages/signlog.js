import React from 'react'

const Signlog = () => {
    const img = "/background.svg";
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
    </div>
    </>
  )
}

export default Signlog