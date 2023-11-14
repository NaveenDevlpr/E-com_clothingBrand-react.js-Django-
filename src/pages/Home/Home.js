import React from 'react'
import BannerOne from '../../components/BannerOne/BannerOne'
import BannerTwo from '../../components/BannerTwo/BannerTwo'
import BannerThree from '../../components/BannerThree/BannerThree'
import { useRef } from 'react'
import BannerFour from '../../components/BannerFour/BannerFour'
const Home = () => {

   
  return (
    <div>
        <BannerOne/>
        <BannerTwo/>
        <BannerThree/>
        <BannerFour/>
    </div>
  )
}

export default Home