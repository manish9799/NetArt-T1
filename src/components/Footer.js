import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
      <p> <IoIosCall className='icons' /> Toll free 1800 200 1234</p>
      <p> <FaFacebook style={{ height: '30px', width: '30px' }} /> www.facebook.com/cripumps</p>
      <p> <IoIosGlobe style={{ height: '30px', width: '30px' }} /> www.crigroups.com</p>
    </div>
  )
}

export default Footer