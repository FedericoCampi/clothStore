import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReactCountryFlag from 'react-country-flag';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const products = useSelector(state=>state.cart.products);

  return (
    <div className='h-18 border-b navBarBackground'>
      <div className='py-2.5 px-2.5 flex'>
        <div className='grow-0 flex items-center gap-[25px] text-lg'>
          <div>
            <ReactCountryFlag countryCode="US" svg style={{width: '25px'}}/>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <Link to='/products/0'>Women</Link>
          </div>
          <div>
            <Link to='/products/1'>Men</Link>
          </div>
          <div>
            <Link to='/products/2'>Children</Link>
          </div>
        </div>
        <div className='grow flex  justify-center items-center text-3xl tracking-wider'>
          <Link to='/' className='font-mono text-4xl'>E&C</Link>
        </div>
        <div className='grow-0 flex items-center gap-[25px] text-lg'>
          <div>
            <Link to='/'>Homepage</Link>
          </div>
          <div>
            <Link to='/'>About</Link>
          </div>
          <div>
            <Link to='/'>Contact</Link>
          </div>
          <div className='flex gap-[15px]'>
            <SearchIcon className='hover:text-orange-600'/>
            <PersonIcon className='hover:text-orange-600'/>
            <FavoriteIcon className='hover:text-red-600'/>
            <div className='flex items-center relative cursor-pointer' onClick={() => setOpen(!open)}>
              <ShoppingCartIcon className='hover:text-orange-600'/>
              <span className='absolute top-[-10px] right-[-8px] flex justify-center 
                  items-center text-xs w-5 h-5 rounded-xl bg-orange-600 text-white'>
                    {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar