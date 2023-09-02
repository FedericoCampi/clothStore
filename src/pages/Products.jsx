import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import List from '../components/List'

import women from '/img/featured/pic1.jpg'
import men from '/img/imgProduct/black.jpg'
import children from '/img/imgProduct/childrens.jpg'

import mock from '../../mock/mock.json'

const Products = () => {

  const products = mock.Products

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState([]);

  const [productFilters, setProductFilters] = useState([])
  const [categoryNumber, setCategoryNumber] = useState([])

  const imagesBanner = [women, men, children]
  
  const categories = ['Pants', 'T-shirts', 'Jacket', 'Dress', 'Jumpsuit']
  const genres = ['woman', 'man']
  
  const location = useLocation();
  const category = (location.pathname.substring(10,11)) 

  useEffect(() => {
    setProductFilters(products.filter(x => x.genre == genres[category]))
  },[category])

  const handleChange = (e) => {
    setProductFilters(products)
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    const typeArray = products.filter(x => x.categories === value)
    setProductFilters(typeArray.filter(x => x.genre === genres[category]))
  }

  return (
    <div className='flex py-[30px] px-[50px]'>
      <div className="flex-initial min-w-[250px] flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[5px]">
          <h2 className='text-lg font-bold'>Product Categories</h2>
            <div className="inputitem">
              <input type='radio' name='category' id={categories[0]} value={categories[0]} onChange={handleChange}/>
              <label className='pl-2' htmlFor={categories[0]}>{categories[0]}</label>
            </div>
            <div className="inputitem">
              <input type='radio' name='category' id={categories[1]} value={categories[1]} onChange={handleChange}/>
              <label className='pl-2' htmlFor={categories[1]}>{categories[1]}</label>
            </div>
            <div className="inputitem">
              <input type='radio' name='category' id={categories[2]} value={categories[2]} onChange={handleChange}/>
              <label className='pl-2' htmlFor={categories[2]}>{categories[2]}</label>
            </div>
            <div className="inputitem">
              <input type='radio' name='category' id={categories[3]} value={categories[3]} onChange={handleChange}/>
              <label className='pl-2' htmlFor={categories[3]}>{categories[3]}</label>
            </div>
        </div>
        <div className="filteritem">
          <h2 className='text-lg font-bold pb-1.5'>Filter by price</h2>
          <div className="flex items-center">
            <span>0</span>
            <input type='range' min={0} max={100} onChange={(e)=> setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filteritem">
          <h2 className='text-lg font-bold'>Sort by</h2>
          <div className="inputitem">
            <input type="radio" id='asc' value='asc' name='price' onChange={(e)=>setSort("asc")}/>
            <label className='pl-2' htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className="inputitem">
            <input type="radio" id='des' value='des' name='price' onChange={(e)=>setSort("desc")}/>
            <label className='pl-2' htmlFor='des'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <img src={imagesBanner[category]} alt='pic1' className='w-full h-[300px] object-cover mb-[50px]'/>
        <List productFilters={productFilters} catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products