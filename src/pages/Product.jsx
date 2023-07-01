import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

import mock from '../../mock/mock.json'

const Product = () => {

  const id = useParams().id
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const products = mock.Products
  const product = products.filter((x) => x.id == id)
  const productItems = product[0]

  const [selectedImg, setSelectedImg] = useState(productItems.image1)
  
  const UPLOAD_URL = import.meta.env.VITE_STRAPI_UPLOAD_URL

  return (
    <div className='py-[20px] px-[50px] flex gap-[50px]'>
          <div className="flex-1 flex gap-[20px]">
            <div className="flex-1">
              <img className='w-full h-[150px] object-cover cursor-pointer mb-[10px] min-w-[125px]' 
                src={productItems.image1} alt={productItems.title} 
                onClick={e=>setSelectedImg(productItems.image1)}/>
              <img className='w-full h-[150px] object-cover cursor-pointer mb-[10px] min-w-[125px]' 
                src={productItems.image2} alt={productItems.title} 
                onClick={e=>setSelectedImg(productItems.image2)}/>
            </div>
            <div className="flex-5">
              <img className='w-full max-h-[800px] object-cover' 
              src={selectedImg} alt='' />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[30px]">
            <h1 className='text-2xl'>{productItems.title}</h1>
            <span className='text-3xl text-orange-500 font-medium'>${productItems.price}</span>
            <p className='text-justify'>{productItems.description}</p>
            <div className='flex items-center gap-[10px]'>
              <button className='bg-slate-200 border-2 border-gray-400 w-[35px] h-[35px] 
                flex items-center justify-center' 
                onClick={() => setQuantity((prev) =>prev === 1 ? 1: prev - 1)}>
                -
                </button>
                {quantity}
              <button className='bg-slate-200 border-2 border-gray-400 w-[35px] h-[35px] 
                flex items-center justify-center' 
                onClick={() => setQuantity(prev=>prev+1)}>
                +
                </button>
            </div>
            <button className='w-[250px] p-[10px] bg-orange-600 text-white items-center gap-[20px] cursor-pointer font-medium'
              onClick={()=>dispatch(addToCart({
                id: productItems.id,
                title: productItems.title,
                description: productItems.description,
                price: productItems.price,
                img: productItems.image1,
                quantity
              }))}>
              <AddShoppingCartIcon/> ADD TO CART
            </button>
            <div className='flex gap-[20px]'>
              <div className="flex items-center gap-[10px] text-orange-600">
                <FavoriteIcon/> ADD TO WISH LIST
              </div>
              <div className="flex items-center gap-[10px] text-orange-600">
                <BalanceIcon/> ADD TO COMPARE
              </div>
            </div>
            <div className="flex flex-col gap-[10px] text-gray-500 my-[15px]">
              <span>Vendor: {productItems.brand}</span>
              <span>Product type: {productItems.categories}</span>
              <span>Tag: {productItems.categories}, {productItems.sub_categories}, {productItems.genre}</span>
            </div>
            <hr />
            <div className="flex flex-col gap-[10px] text-gray-500 mt-[15px]">
              <span>DESCRIPTION</span>
              <hr/>
              <span>ADDITIONAL INFORMATION</span>
              <hr/>
              <span>FAQ</span>
            </div>
          </div>
    </div>
  )
}

export default Product