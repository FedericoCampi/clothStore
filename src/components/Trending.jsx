import React from 'react'
import Card from './Card'

import mock from '../../mock/mock.json'

const Trending = () => {

    const products = mock.Products

    return (
        <div className='my-[100px] mx-[200px]'>
            <div className='flex items-center justify-between ml-[100px] mb-[50px]'>
                <h1 className='flex-1 capitalize text-5xl text-start font-bold'>Selected for you</h1>
            </div>
            <div className='flex gap-[50px] flex-wrap'>
                {  
                products.filter((x)=>x.type == "trending").map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default Trending