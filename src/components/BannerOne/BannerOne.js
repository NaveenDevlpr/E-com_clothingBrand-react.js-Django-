import React from 'react'
import './BannerOne.css'
import {Link} from 'react-scroll'
const BannerOne = ({}) => {


  return (
    <div className='banner-main'>
        <div className='transBg'></div>
        <div className='banner-content-container'>
           <div className='banner-content'>
                <h2>The<br/>Luxurious<br/>Fashion
                </h2>
                <p>
                "We believe that
                fashion should be accessible to all, and that's why we've curated a selection of high-end clothing 
                and accessories that won't break the bank. With our commitment to delivering exceptional value, 
                you can explore an array of stylish options without compromising on quality. 
                Elevate your wardrobe with a touch of affordable luxury, and redefine your fashion story with us."
                </p>
           </div>
           <div className='banner-button'>
                shop
              <Link to='target' smooth={true} duration={500}>
                    <box-icon name='right-arrow-alt' color='rgb(255, 246, 218)' pull='right' ></box-icon>
              </Link>
           </div>
        </div>
    </div>
  )
}

export default BannerOne