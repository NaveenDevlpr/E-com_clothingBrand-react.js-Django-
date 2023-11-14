import React, { useState } from 'react'
import './Navbar.css'
import 'boxicons'
import {Link} from 'react-router-dom'
const Navbar = () => {

    const [searchBar,setSearchBar]=useState(false)

    const handleActive=()=>{
        setSearchBar(!searchBar)
    }
  return (
    <div className='main-navbar'>
        <div className='navbar-contents'>
            <h2>Vintique.</h2>
            <div className='right-contents'>
                <div className={`searchBar ${searchBar?'visible':''}`}>
                    <input type='text' placeholder='search'></input>
                </div>
                <div className='nav-icons'>
                    <Link 
               
                    onClick={handleActive}>
                        <box-icon name='search' color='rgb(255, 246, 218)'></box-icon>
                    </Link>
                    <box-icon name='cart' color='rgb(255, 246, 218)'></box-icon>
                    <box-icon name='heart' color='rgb(255, 246, 218)'></box-icon>
                    <box-icon name='user-circle' color='rgb(255, 246, 218)'></box-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar