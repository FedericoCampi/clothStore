import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
    
    return (
        <div className='bg-orange-600 text-white w-full h-full p-[15px] flex justify-center'>
            <div className="w-2/4 flex items-center justify-between">
                <span>BE IN TOUCH WITH US: </span>
                <div className="mail">
                    <input className='p-[10px] border-none rounded-l-lg' type='text' placeholder='Enter your email..'/>
                    <button className='p-[10px] bg-black rounded-r-lg'>JOIN US</button>
                </div>
                <div className="flex gap-[10px]">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <GoogleIcon/>
                    <TwitterIcon/>
                </div>
            </div>
        </div>
    )
}

export default Contact