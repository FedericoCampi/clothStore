import React from 'react'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import Featured from '../components/Featured'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featured type='featured'/>
      <Categories/>
      <Featured type='trending'/>
      <Contact/>
    </div>
  )
}

export default Home