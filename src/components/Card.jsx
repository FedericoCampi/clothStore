import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {

    const UPLOAD_URL = import.meta.env.VITE_STRAPI_UPLOAD_URL
    
    return (
        <Link to={`/product/${item?.id}`}>
            <div className='flex w-[275px] flex-col gap-[10px] mb-[50px]'>
                <div className='w-full h-[400px] overflow-hidden relative'>
                    {item?.attributes.isNew && <span className='absolute top-1 left-1 bg-white text-red-700 py-[3px] px-[5px] z-20 rounded-xl'>
                        New season
                    </span>}
                    <img src={UPLOAD_URL+item.attributes.image.data.attributes.url} alt={item?.attributes.title} className="w-full h-full object-cover absolute rounded-xl"/>
                    {/* try transition attribute */}
                    <img src={UPLOAD_URL+item.attributes.image2.data.attributes.url} alt="" className="w-full h-full object-cover absolute rounded-xl hover:opacity-0 ease-linear"/>
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className='flex gap-[20px]'>
                    <h3 className='text-lg font-medium text-gray-600 line-through'>${item?.attributes.oldPrice || item?.attributes.price + 20}</h3>
                    <h3 className='text-lg font-medium'>${item?.attributes.price}</h3>
                </div> 
            </div>
        </Link>
    )
}

export default Card