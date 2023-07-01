import React from 'react'
import Card from './Card';
import useFetch from '../hooks/useFetch';

const List = ({productFilters, subCats, maxPrice, catId, sort}) => {

    let productsFinals = productFilters.filter(x => x.price <= maxPrice)

    if(sort == 'asc'){
        productsFinals.sort((a,b) => (a.price > b.price) ? 1 : -1)
    }else{
        productsFinals.sort((a,b) => (a.price < b.price) ? 1 : -1)
    }

    return (
        <div className='flex justify-between flex-wrap'>
            {productsFinals?.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List