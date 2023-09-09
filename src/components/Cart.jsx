import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem,addProduct, resetCart, removeProduct } from '../redux/cartReducer';
import { useParams, useNavigate } from 'react-router-dom';


import axios from 'axios';

const Cart = () => {

    const id = useParams().id
    const dispatch = useDispatch()
    const products = useSelector(state=>state.cart.products)

    const UPLOAD_URL = import.meta.env.VITE_STRAPI_UPLOAD_URL

    const navigate = useNavigate();
    
    const totalPrice = () => {
        let total = 0
        products.forEach((item) => (
            total+= item.quantity*item.price
        ))
        return total.toFixed(2)
    };


    const urlLocal = "http://localhost:3600"
    const url = "https://apinode-mysql-ylcl-dev.fl0.io"

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setProductData(products?.map(product => ({
            price_data: {
                product_data: {
                    name: product.title,
                    description: product.description,
                },
                currency: "usd",
                unit_amount: Math.floor(product.price*100),
            },
            quantity: product.quantity
            }))
        )
    },[products])

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/api/create-checkout-session`, productData);

            if (response.status === 200) {
            // Handle success
            console.log('Data successfully sent to the API', response.data.url);
            window.location.replace(response.data.url);
            } else {
            // Handle errors
            console.error('Failed to send data to the API');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className='bg-[#383868] absolute right-[20px] top-[80px] z-50  p-[20px] w-[500px] shadow-2xl'>
            <h2 className='text-white mb-[30px] text-lg'>Products in your Cart</h2>
            {products?.map(item=>
                    (
                        <div className="bg-[#cfd1ff] flex justify-between border-2 p-[5px]" key={item.id}>
                        <div className="w-full flex items-center gap-[20px] justify-between" key={item.id}>
                            <div className="w-full flex items-center gap-[20px]">
                                <img className='w-[80px] h-[100px] object-cover' 
                                    src={item.img} alt='cartImg'/>
                                <div className="w-full details">
                                    <h3 className='text-lg text-black'>{item.title}</h3>
                                    <p className='text-gray-500 mb-[10px]'>{item.description}</p>
                                    <div className='w-full flex items-center'>
                                        <div className='flex items-center'>
                                            <button className='w-[20px] border border-[#383868]
                                                h-[25px] flex items-center justify-center'
                                                disabled={item.quantity <= 1 ? true: false}
                                                onClick={() => dispatch(removeProduct({
                                                    id: item.id,
                                                }))}
                                            >
                                                    -
                                            </button>
                                                <div className='text-[#383868] w-[20px]
                                                    flex items-center justify-center'>
                                                    {item.quantity}
                                                </div>
                                            <button className='w-[20px] border border-[#383868]
                                                h-[25px] flex items-center justify-center' 
                                                onClick={() => dispatch(addProduct({
                                                    id: item.id,
                                                }))}>
                                                    +
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-end'>
                            <DeleteIcon className='text-[#f74f4f] cursor-pointer' 
                            onClick={()=>dispatch(removeItem(item.id))}/>
                            <div className='w-full flex justify-end mb-[5px] mr-[5px]'>
                                ${item.price}
                            </div>
                        </div>
                        </div>
                    )
                )}
            <div className='flex justify-between py-[10px]'>
                <span className='font-bold text-[#cfd1ff]'>SUBTOTAL</span>
                <span className='font-bold text-[#cfd1ff]'>${totalPrice()}</span>
            </div>
            <button className='p-[10px] flex items-center justify-center gap-[20px] 
            cursor-pointer border-none bg-[#2f9e8c;] text-white mb-[20px]'
                onClick={handlePayment}
            >
                PROCEED TO CHECKOUT
            </button>
            <span className='text-red-500 text-sm cursor-pointer'
                onClick={()=>dispatch(resetCart())}>
                Reset cart</span>
        </div>
    )
}

export default Cart