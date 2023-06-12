import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const Product = () => {

  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  
  const UPLOAD_URL = import.meta.env.VITE_STRAPI_UPLOAD_URL

  return (
    <div className='py-[20px] px-[50px] flex gap-[50px]'>
      {loading ? ("loading") : (
        <>
          <div className="flex-1 flex gap-[20px]">
            <div className="flex-1">
              <img className='w-full h-[150px] object-cover cursor-pointer mb-[10px] min-w-[125px]' 
                src={UPLOAD_URL+data?.attributes?.image?.data?.attributes?.url} alt='black' 
                onClick={e=>setSelectedImg("image")}/>
              <img className='w-full h-[150px] object-cover cursor-pointer mb-[10px] min-w-[125px]' 
                src={UPLOAD_URL+data?.attributes?.image2?.data?.attributes?.url} alt='shirts' 
                onClick={e=>setSelectedImg("image2")}/>
            </div>
            <div className="flex-5">
              <img className='w-full max-h-[800px] object-cover' 
              src={UPLOAD_URL+data?.attributes[selectedImg]?.data?.attributes?.url} alt='' />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[30px]">
            <h1 className='text-2xl'>{data?.attributes?.title}</h1>
            <span className='text-3xl text-orange-500 font-medium'>${data?.attributes?.price}</span>
            <p className='text-justify'>{data?.attributes?.description}</p>
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
                id: data.id,
                title: data.attributes.title,
                description: data.attributes.description,
                price: data.attributes.price,
                img: data.attributes.image.data.attributes.url,
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
              <span>Vendor: Polo</span>
              <span>Product type: T-shirt</span>
              <span>Tag: T-shirt, Women, Top</span>
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
        </>
      )}
    </div>
  )
}

export default Product