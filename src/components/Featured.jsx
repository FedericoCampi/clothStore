import React from 'react'
import Card from './Card'

import mock from '../../mock/mock.json'

const Featured = () => {
    
    const products = mock.Products
    // const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
    return (
        <div className='my-[100px] mx-[200px]'>
            <div className='items-center justify-between ml-[100px] mb-[50px]'>
                <h1 className='flex-1 capitalize text-5xl text-start font-bold'>Su­per Sale</h1>
                <h1 className='flex-1 capitalize text-5xl text-start font-bold'>new styles avail­able now</h1> 
            </div>
            <div className='flex gap-[50px] flex-wrap'>
                {  
                products.filter((x)=>x.type == "featured").map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default Featured