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

    <ul className='permalinks'>
        <li><Link to='/' rel='noreferrer'>Home</Link></li>
        <li><Link to='/about' rel='noreferrer'>About</Link></li>
        <li><Link to='/experience' rel='noreferrer'>Experience</Link></li>
        <li><Link to='/services' rel='noreferrer'>Services</Link></li>
        <li><Link to='/portfolio' rel='noreferrer'>Portfolio</Link></li>        
        <li><Link to='/contact' rel='noreferrer'>Contact ME</Link></li>        

    </ul>

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