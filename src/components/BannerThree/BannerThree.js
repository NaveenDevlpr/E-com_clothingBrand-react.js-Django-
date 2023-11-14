import React from 'react'
import './BannerThree.css'
import offer from '../images/offer.jpg'

const BannerThree = () => {
  return (
    <div className='bannerThree-main'>
        <div className='lineSpace'>
            <div className='moveText'>
                People stare make it Worth their while  -  Discover your perfect style  -  Your style speaks
            </div>
        </div>
        <div className='contents'>
            <div className='offer'>
                <h2>Limited Time Winter Sales</h2>
                <h2>Get 50% off</h2>
                <p>
                    Unleash your style with our new collections
                </p>
            </div>
            <div className='vl'></div>
           <div className='imgContainer'>
                <img src={offer} alt=''></img>
           </div>
        </div>
    </div>
  )
}

export default BannerThree