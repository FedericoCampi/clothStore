import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

    return (
        <div className='h-[calc(100%_-_80px)] w-full relative overflow-hidden'>
            <div className='w-screen flex ease-in duration-500' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img className='w-screen h-full object-cover' src={data[0]} alt='carousel0'/>
                <img className='w-screen h-full object-cover' src={data[1]} alt='carousel1'/>
                <img className='w-screen h-full object-cover' src={data[2]} alt='carousel2'/>
            </div>
            <div className="absolute left-0 right-0 bottom-[200px] m-auto w-fit flex gap-[10px]">
                <div className='text-[white] w-[50px] h-[50px] border-2 border-orange-600 flex items-center justify-center cursor-pointer'
                    onClick={prevSlide}
                >
                    <ArrowBackIcon/>
                </div>
                <div className='text-white w-[50px] h-[50px] border-2 border-orange-600 flex items-center justify-center cursor-pointer'
                    onClick={nextSlide}
                >
                    <ArrowForwardIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider