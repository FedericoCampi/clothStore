import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Categories from '../components/Categories'
import Contact from '../components/Contact'
import Featured from '../components/Featured'
import Slider from '../components/Slider'
import Trending from '../components/Trending'

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  // When the div becomes visible on the screen, set isVisible to true
  if (inView && !isVisible) {
    setIsVisible(true);
  }

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