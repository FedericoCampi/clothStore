import React from 'react'
import Card from './Card'

import mock from '../../mock/mock.json'

const Trending = () => {

    const products = mock.Products

    return (
        <div className='my-[100px] mx-[200px]'>
            <div className='flex items-center justify-between mb-[50px]'>
                <h1 className='flex-1 capitalize text-xl font-bold'>Trending products</h1>
                <p className='flex-[2_2_0%] text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quae expedita, rerum laudantium sit fuga soluta numquam qui, fugiat esse a inventore beatae repellat corporis incidunt. Odio sunt facilis saepe.
                </p>
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