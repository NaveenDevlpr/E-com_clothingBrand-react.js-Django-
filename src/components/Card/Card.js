import React from 'react'
import './card.css'
const Card = ({id,title,image}) => {
  return (
    <div className='card'> 
        <img src={image} alt=''></img>
      
    </div>
  )
}

export default Card