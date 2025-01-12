import React from 'react'
import girl from "../../assets/girl.svg"

const GetStarted = () => {
  return (
    <div className='flex flex-col gap-6 items-center p-8 rounded-lg bg-[#0052FE] text-white shadow-lg'>
        <h2 className='font-bold text-2xl'>Get Started With KoinX</h2>
        <h2 className='font-bold text-2xl mt-[-12px]'>For FREE</h2>
        <p className='text-center'>With our range of features that you can equip for free,
        KoinX allows you to be more educated and aware of your tax reports.</p>
        <img src={girl} alt='' className='h-[210px]'></img>
        <button className="mt-auto bg-white text-black font-bold px-6 py-3 rounded-md">Get Started for FREE →</button>
    </div>
  )
}

export default GetStarted