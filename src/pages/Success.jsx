import React from 'react'
import success from '../../public/img/success.png'

const Success = () => {
  return (
    <div className='w-full h-[400px] bg-slate-300 flex flex-col items-center justify-center'>
        <img className='h-28' src={success} alt='success'/>
        <p className='text-3xl'>Successful payment</p>
    </div>
  )
}

export default Success