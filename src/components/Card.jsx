import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {

    // const UPLOAD_URL = import.meta.env.VITE_STRAPI_UPLOAD_URL
    
    const sendItem = (item) => {
        
    }

    return (
        <Link onClick={sendItem} to={`/product/${item?.id}`}>
            <div className='flex w-[275px] flex-col gap-[10px] mb-[50px]'>
                <div className='w-full h-[400px] overflow-hidden relative'>
                    {item?.isNew && <span className='absolute top-1 left-1 bg-white text-red-700 py-[3px] px-[5px] z-20 rounded-xl'>
                        New season
                    </span>}
                    <img src={item?.image1} alt={item?.title} className="w-full h-full object-cover absolute rounded-xl"/>
                    {/* try transition attribute */}
                    <img src={item?.image2} alt={item?.title} className="w-full h-full object-cover absolute rounded-xl hover:opacity-0 ease-linear"/>
                </div>
                <h2>{item?.title}</h2>
                <div className='flex gap-[20px]'>
                    <h3 className='text-lg font-medium text-gray-600 line-through'>${(item?.price + 20).toFixed(2)}</h3>
                    <h3 className='text-lg font-medium'>${item?.price}</h3>
                </div> 
            </div>
        </Link>
    )
}

export default Card