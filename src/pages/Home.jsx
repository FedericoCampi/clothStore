import React from 'react'
import Categories from '../components/Categories'
import Contact from '../components/Contact'
import Featured from '../components/Featured'
import Slider from '../components/Slider'
import Trending from '../components/Trending'

const Home = () => {
  
  return (
    <div className='home'>
      <Slider/>
      <Featured/>
      <Categories/>
      <Trending/>
      <Contact/>
    </div>
  )
}

export default Home