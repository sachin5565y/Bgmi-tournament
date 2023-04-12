import React from 'react';
import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import { Link} from "react-router-dom";
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer_logo' rel='noreferrer'>Bgmi-tournament</a>



    <div className='footer_socials'>
        <Link to='https://facbook.com' target='_blank' rel='noreferrer'><FaFacebook/></Link>
        <Link to='https://instagram.com'target='_blank' rel='noreferrer'><FiInstagram/></Link>
        <Link to='https://twitter.com'target='_blank' rel='noreferrer'><IoLogoTwitter/></Link>
    </div>
    <div className='footer_copyright'>
      <small>&copy; SachinY. All rights are reserved</small>
    </div>
   </footer>
  )
}

export default Footer