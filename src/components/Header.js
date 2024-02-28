import React from 'react'
import logo from '../images/logo.png'
import './Style.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt='no-image' />
        </div>
    )
}

export default Header