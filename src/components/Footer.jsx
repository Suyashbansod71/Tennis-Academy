import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/footer.css'
import logoImage from "../images/mainLogo1.jpg";
import instagramLogo from "../images/instagram.png";
import youtubeLogo from "../images/youtube.png";
import faceBookLogo from "../images/facebook.png";

const Footer = () => {
 
   const navigate = useNavigate();

    const handleKav = () => {
     try {
      window.location.href = '#top';
       navigate('/');
      
     } catch (error) {
       alert('error')
     }
  }

  return (
    <div className='footer'>
       {/* <img src="./main-logo.jpeg" alt="" height= '100px' width='100px'/> */}
     <div className='sb_footer section_padding'>
      <img src={logoImage} alt="Who We Are" className="foot_logo" />
      <div className='sb_footer-links'>
        <div className='sb_footer-links_div shadow'>
          <h4>Important links</h4>
          <a href='/classestype' className='Foot-a'>
            <p>Classes Types</p>
          </a>
          <a href='/membership'className='Foot-a'>
            <p>Memberships</p>
          </a>
          <a href='/contactUs'className='Foot-a'>
            <p>Contact Us</p>
          </a>
        </div>
        <div className='sb_footer-links_div shadow'>
          <h4> Classes Types</h4>
          <a href='/classestype'className='Foot-a'>
            <p>Yoga</p>
          </a>
          <a href='/classestype'className='Foot-a'>
            <p>Fusion</p>
          </a>
          <a href='/classestype'className='Foot-a'>
            <p>Meditation</p>
          </a>
        </div>
        {/* <div className='sb_footer-links_div shadow'>
          <h4>Contact Us</h4>
          <a href='tel:(+91) 8953279337'className='Foot-a'>
            <p>(+91)8953279337</p>
          </a>
          <a href='mailto:yogawithkavitatripathi@gmail.com'className='Foot-a'>
            <p className='text-break'>yogawithkavitatripathi@gmail.com</p>
          </a>
        </div> */}
        <div className='sb_footer-links_div shadow'>
          <h4>Social Links</h4>
          <p ><img src={instagramLogo} alt=" " />
              <a className='foot-p' href='' target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p><img src={faceBookLogo} alt=" " />
          <a className='foot-p' href=''  target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><img src={youtubeLogo} alt=""/>
          <a className='foot-p' href=''>Youtube</a></p>
        </div>
      </div>
     </div>
     <div className='sb_footer-below'>
      <div className='sv_footer-copyright'>
        <p>
          @{new Date().getFullYear()} Sardar Warriors Lawn Tennis Academy. All Rights Reserved.
        </p>
      </div>
      {/* <div className='sb_footer-below-links'>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
         <a href='/'><div><p>Terms& Conditions</p></div></a>
        </div>  */}
     
     </div>
    </div>
  )
}

export default Footer