import React from 'react'
import Card from './Card'
import useFetch from '../hooks/useFetch'

const Featured = ({type}) => {
    
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
    return (
        <div className='my-[100px] mx-[200px]'>
            <div className='flex items-center justify-between mb-[50px]'>
                <h1 className='flex-1 capitalize text-xl font-bold'>{type} products</h1>
                <p className='flex-[2_2_0%] text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quae expedita, rerum laudantium sit fuga soluta numquam qui, fugiat esse a inventore beatae repellat corporis incidunt. Odio sunt facilis saepe.
                </p>
            </div>
            <div className='flex gap-[50px] flex-wrap'>
                { error ? "Something wrong"
                : (loading 
                ? "loading"
                : data?.map(item => (
                    <Card item={item} key={item.id}/>
                )))}
            </div>
        </div>
    )
}

export default Featured