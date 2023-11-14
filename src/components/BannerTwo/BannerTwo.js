import React from 'react'
import './BannerTwo.css'
import shirt from '../images/shirt.jpg'
import pant from '../images/kpants.jpg'
import tshirt from '../images/tshirt.jpeg'
import accessories from '../images/accessories.jpg'
import { useRef } from 'react'
const BannerTwo = () => {

  return (
    <div className='bannerTwo-main' >
        <div className='BannerTwo-heading'>
            <h2>
                Create Your Own Style !
            </h2>
        </div>
        <div className='bannerTwo-contents'>
            <div className='content-left'>
                <p>
                Choose our unique fashion and embrace individuality.
               
                Discover clothing that speaks to your personality and 
                make a statement without saying a word. It's not just 
                fashion; it's an expression of you.
                </p>
            </div>
            <div className='parent-grid' id='target'>
                <div className='content-right'>
                        <div className='grid-item'>
                            <img src={shirt} alt=''></img>
                            <div className='bg'></div>
                            <div className='text'>
                                  <h2>Shirts</h2>
                            </div>
                            
                        </div>
                        <div className='grid-item'>
                            <img src={pant} alt='' ></img>
                                <div className='bg'></div>
                                <div className='text'>
                                    <h2>Pants</h2>
                                </div>
                            
                        </div>
                        
                        <div className='grid-item'>
                            <img src={tshirt} alt=''></img>
                                    <div className='bg'></div>
                                    <div className='text'>
                                        <h2>T-shirts</h2>
                                    </div>
                        </div>
                        <div className='grid-item'>
                            <img src={accessories} alt=''></img>
                                <div className='bg'></div>
                                <div className='text'>
                                        <h2>Accessories</h2>
                                 </div>
                        </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default BannerTwo