import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/footer.css'
import logoImage from "../images/mainLogo1.jpg";
import instagramLogo from "../images/instagram.png";
import youtubeLogo from "../images/youtube.png";
import faceBookLogo from "../images/facebook.png";
import Logo from "../images/LogoFinal.png"
import { SocialIcon } from 'react-social-icons'

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
     <div className='sb_footer section_padding'>
      <img src={Logo} alt="Who We Are" className="foot_logo" />
      <div className='sb_footer-links'>
      <div className='sb_footer-links_div shadow'>
          <h4>Important links</h4>
          <a href='#who-we-are' className='Foot-a'>
            <p>Who We Are</p>
          </a>
          <a href='#achievements' className='Foot-a'>
            <p>Achievements</p>
          </a>
          <a href='#coaches' className='Foot-a'>
            <p>Coaches</p>
          </a>
        </div>

        <div className='sb_footer-links_div shadow'>
          <h4>Others</h4>
          <a href='#branches' className='Foot-a'>
            <p>Our Branches</p>
          </a>
          <a href='#gallery' className='Foot-a'>
            <p>Gallery</p>
          </a>
        </div>

        <div className='sb_footer-links_div shadow'>
          <h4>Social Links</h4>
          {/* <p ><img src={instagramLogo} alt=" " />
              <a className='foot-p' href='https://www.instagram.com/sardarwarriors?igsh=ODQ5aWs0MXZsYTkx' target="_blank" rel="noopener noreferrer">Instagram</a>
          </p> */}
          <div className='socialLogos'>
          <p>
            <SocialIcon url ="https://www.instagram.com/sardarwarriors?igsh=ODQ5aWs0MXZsYTkx" className='floating'/>
          </p>
          <p>
          <SocialIcon url="https://wa.me/919876543210" network="whatsapp" className='floating' style={{marginLeft: "1em"}}/>
          </p>
          </div>

          {/* <p><img src={faceBookLogo} alt=" " />
          <a className='foot-p' href=''  target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><img src={youtubeLogo} alt=""/>
          <a className='foot-p' href=''>Youtube</a></p> */}
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