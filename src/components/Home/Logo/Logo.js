import React from 'react'
// import LogoS from '../../../assets/images/logo-LLL.png'
import lakshayImage from "../../../assets/images/lakshayImage.png";
import './Logo.scss'

const Logo = () => {
  
   return (
      <div className="logo-container">
         <img
            className="solid-logo"
            src={lakshayImage}
            alt="JavaScript,  Developer"
         />
      </div>
   )
}

export default Logo
