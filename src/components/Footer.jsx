import React from 'react'

import { styles } from '../styles';

const Footer = () => {
  return (
    <div className={styles.marginFooter}>
      <div className='flex gap-[50px]'>
        <div className='flex-1 flex flex-col gap-[10px]'>
          <h1 className={styles.titlesFooter}>Categories</h1>
          <span className={styles.textFooter}>Women</span>
          <span className={styles.textFooter}>Men</span>
          <span className={styles.textFooter}>Shoes</span>
          <span className={styles.textFooter}>Accesories</span>
          <span className={styles.textFooter}>New Arrivals</span>
        </div>
        <div className='flex-1 flex flex-col gap-[10px]'>
          <h1 className={styles.titlesFooter}>Links</h1>
          <span className={styles.textFooter}>FAQ</span>
          <span className={styles.textFooter}>Pages</span>
          <span className={styles.textFooter}>Stores</span>
          <span className={styles.textFooter}>Compare</span>
          <span className={styles.textFooter}>Cookies</span>
        </div>
        <div className='flex-1 flex flex-col gap-[10px]'>
          <h1 className={styles.titlesFooter}>About</h1>
          <span className={`${styles.textFooter} text-justify break-all`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste harum 
            doloribus laborum nemo illum modi a pariatur dolore consequatur?
          </span>
        </div>
        <div className='flex-1 flex flex-col gap-[10px]'>
          <h1 className={styles.titlesFooter}>Contact</h1>
          <span className={`${styles.textFooter} text-justify break-all`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iste harum 
            doloribus laborum nemo illum modi a pariatur dolore consequatur?
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-[40px]'>
        <div className='flex items-center'>
          <span className='font-bold text-orange-600'>Store</span>
          <span className='ml-[20px] text-gray-500'>&copy;Copyright 2023. All Rights Reserved</span>
        </div>
        <div>
          <img src='/img/stripePayments.png' alt='stripe'/>
        </div>
      </div>
    </div>
  )
}

export default Footer