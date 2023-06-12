import React from 'react'
import { Link } from 'react-router-dom'

import pic1 from '/img/featured/pic1.jpg'
import pic2 from '/img/featured/pic2.jpg'
import pic3 from '/img/featured/pic3.jpg'
import pic4 from '/img/featured/pic4.jpg'
import pic5 from '/img/featured/pic5.jpg'
import pic6 from '/img/featured/pic6.jpg'

const Categories = () => {
    
    return (
    <div className='flex h-full gap-[10px] m[10px]'>
        <div className="flex-1 flex gap-[10px] flex-col">
            <div className="flex flex-1 gap-[10px] relative">
                <img className='w-full h-full object-cover' src={pic1} alt="pic1"/>
            <button className='bg-white absolute min-w-[100px] h-[50px] p-2.5 top-0 bottom-0 left-0 right-0 m-auto w-fit rounded-2xl'>
                    <Link className='text-xl' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="flex flex-1 gap-[10px] relative">
                <img className='w-full h-full object-cover' src={pic2} alt="pic1"/>
                <button className='bg-white absolute min-w-[100px] h-[50px] p-2.5 top-0 bottom-0 left-0 right-0 m-auto w-fit rounded-2xl'>
                    <Link className='text-xl' to='/products/1'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="flex-1 flex gap-[10px]">
            <div className="flex flex-1 gap-[10px] relative">
                <img className='w-full h-full object-cover' src={pic3} alt="pic1"/>
                <button className='bg-white absolute min-w-[100px] h-[50px] p-2.5 top-0 bottom-0 left-0 right-0 m-auto w-fit rounded-2xl'>
                    <Link className='text-xl' to='/products/1'>Sale</Link>
                </button>
            </div>
        </div>
        <div className="flex flex-1 flex-2 gap-[10px] flex-col">
            <div className="flex flex-1 gap-[10px] ">
                <div className="flex flex-1 gap-[10px]">
                    <div className="flex flex-1 gap-[10px] relative">
                        <img className='w-full h-full object-cover' src={pic4} alt="pic1"/>
                        <button className='bg-white absolute min-w-[100px] h-[50px] p-2.5 top-0 bottom-0 left-0 right-0 m-auto w-fit rounded-2xl'>
                            <Link className='text-xl' to='/products/1'>Sale</Link>
                        </button>
                    </div>
                </div>
                <div className="flex flex-1 gap-[10px]">
                    <div className="flex flex-1 gap-[10px] relative">
                        <img className='w-full h-full object-cover' src={pic5} alt="pic1"/>
                        <button className='bg-white absolute min-w-[100px] h-[50px] p-2.5 top-0 bottom-0 left-0 right-0 m-auto w-fit rounded-2xl'>
                            <Link className='text-xl' to='/products/1'>Sale</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 gap-[10px] relative">
                <img className='w-full h-full object-cover' src={pic6} alt="pic1"/>
                <button className='bg-white absolute min-w-[100px] h-[50px] p-2.5 top-0 bottom-0 left-0 right-0 m-auto w-fit rounded-2xl'>
                    <Link className='text-xl' to='/products/1'>Sale</Link>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Categories