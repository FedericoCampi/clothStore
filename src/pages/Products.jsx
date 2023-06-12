import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../components/List'

import pic1 from '/img/featured/pic1.jpg'
import useFetch from '../hooks/useFetch'

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter(item=> item !== value))
  }
  
  return (
    <div className='flex py-[30px] px-[50px]'>
      <div className="flex-initial min-w-[250px] flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[5px]">
          <h2 className='text-lg font-bold'>Product Categories</h2>
          {data?.map(item=>(
            <div className="inputitem" key={item.id}>
              <input type='checkbox' id={item.id} value={item.id} onChange={handleChange}/>
              <label className='pl-2' htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filteritem">
          <h2 className='text-lg font-bold pb-1.5'>Filter by price</h2>
          <div className="flex items-center">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filteritem">
          <h2 className='text-lg font-bold'>Sort by</h2>
          <div className="inputitem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
            <label className='pl-2' htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className="inputitem">
            <input type="radio" id='des' value='des' name='price' onChange={e=>setSort("des")}/>
            <label className='pl-2' htmlFor='des'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <img src={pic1} alt='pic1' className='w-full h-[300px] object-cover mb-[50px]'/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products