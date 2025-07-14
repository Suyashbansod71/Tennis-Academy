import React from "react";
import "../styles/landingPage.css";
import logoImage from "../images/mainLogo1.jpg";
import downWardArrow from "../images/downwardArrow.png";
import Logo from "../images/LogoFinal.png"

const HeroSection = () => {

  const whatsappNumber = "919876543210";
  const whatsappMessage = "Hello! I'm interested in your academy.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (

    //Hero Section Code
    <div className="heroSection">
      <div className="heroContent">
        <img src={Logo} alt="Logo" className="logo" />
        <h3 className="main-text">
          EAT{"\n"}TENNIS{"\n"}REPEAT
        </h3>
      </div>

      <div className="heroSubContent">
        <h4 className="sub-text">
          The Academy That Offers{"\n"}
          Everything You Need to{"\n"}
          Become The Best
        </h4>
        <button className="join-button" onClick={handleWhatsAppClick}>Join Now</button>
        <img src={downWardArrow} alt="" className="downward-arrow" />
      </div>
    </div>
    

  );
};

export default HeroSection;
