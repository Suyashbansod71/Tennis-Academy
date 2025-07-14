import React, {useEffect, useRef, useState } from "react";
import "../styles/landingPage.css";
import whoWeAre from "../images/whoWeAre.png";
// import downWardArrow from "../images/downwardArrow.png";
import useScrollAnimation from "../hooks/useScrollAnimation";
// import racketVideo from "../videos/racketVideo.mp4"
import netVideo from "../videos/netVideo.mp4"
// import courtVideo from "../videos/courtVideo.mp4"
import player1 from "../images/p1.jpeg";
import player2 from "../images/p2.jpeg";
import player3 from "../images/p3.jpeg";
import court1 from "../images/court1.jpeg";
import court2 from "../images/court2.jpeg";
import court3 from "../images/court3.jpeg";
import racket1 from "../images/racket1.jpeg";
import racket2 from "../images/racket2.jpeg";
import Achievements from "./Achievements";



const MainContent = () => {
  const images = [player1, player2, player3, court1, court2, court3, racket1, racket2];

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    const carousel = carouselRef.current;
    if (carousel && carousel.children[activeIndex]) {
      const activeItem = carousel.children[activeIndex];
      const itemOffsetLeft = activeItem.offsetLeft - carousel.offsetLeft;
      const centerOffset = (carousel.offsetWidth - activeItem.offsetWidth) / 2;
    
      carousel.scrollTo({
        left: itemOffsetLeft - centerOffset,
        behavior: 'smooth',
      });
    }
    
  }, [activeIndex]);
  

  useScrollAnimation();
  return (
    //Main Content Section Code

    <>
      {/* Who WE Are Section */}
      <div className="whoWeAreSection" id="who-we-are">
        <div className="titles-right">
          <h4>Who We Are</h4>
        </div>

        <div className="whoContent">
          <div className="whoText">
            <img src={whoWeAre} alt="Who We Are" className="whoImage" />
            <p>
            At Sardar Warrior's Lawn Tennis Academy, we believe tennis is for everyone—kids, teens, adults, and young-at-heart seniors! 
            </p>
            <p>
            Whether you're picking up a racquet for the first time, getting back in the game, or chasing your next trophy, we’ve got a program for you. 
            </p>
            <p>
            Our friendly, experienced coaches create a fun, energetic environment where learning is exciting, improvement is constant, and every session leaves you smiling.
            </p>
          </div>
        </div>
      </div>

{/* Achievements Section */}
      <div className="achievements" id="achievements">
        <div className="titles-left">
          <h4 style={{marginLeft: "10px"}} >Achievements</h4>

          <Achievements />
          {/* <div className="heroSectionAchievements">
            <div className="timeline-container">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <h3>Adira Sandeep Bhagat</h3>
                  <p>
                    U10 - MAHA Rank 2<br />
                    U12 - MAHA Rank 12
                  </p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <h3>Sejal Arun Jadhav</h3>
                  <p>
                    U10 - MAHA Rank 2<br />
                    U12 - MAHA Rank 12
                  </p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-content">
                  <h3>Tasmai Nagesh Pohakar</h3>
                  <p>
                    U10 - MAHA Rank 2<br />
                    U12 - MAHA Rank 12
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Coaches Section */}
      <div className="coachSection" id="coaches">
      <div className="titles-right">
          <h4>Coaches</h4>
        </div>

        {/* <div className="coachInfo">
              <p><strong>Sardar singh Thakur</strong><br></br> <br></br>ITF level 1 <br></br>NIS/ SAI certified <br></br> ITF National officiate</p>

              <p><strong>Shweta Thakur</strong><br></br> <br></br> AITA level II <br></br> AITA fitness level 1 <br></br> ITF National officiating </p>

        </div> */}

<div className="coachInfo">
      <div className="coach-card">
        {/* <div className="coach-icon"></div> */}
        <div className="coach-name">Sardarsingh Thakur</div>
        <div className="qualification">ITF Level 1</div>
        <div className="qualification">NIS/SAI Certified</div>
        <div className="qualification">ITF National Officiate</div>
      </div>

      <div className="coach-card">
        {/* <div className="coach-icon"></div> */}
        <div className="coach-name">Shweta Thakur</div>
        <div className="qualification">AITA Level II</div>
        <div className="qualification">AITA Fitness Level 1</div>
        <div className="qualification">ITF National Officiating</div>
      </div>
    </div>

      </div>

      {/* Our Branches Section */}
      <div className="branchSection" id="branches">
      <div className="titles-left">
          <h4>Our Branches</h4>
        </div>


<div className="branchDetails">
      <div className="branch">
        <div className="branch-header">
          <div className="branch-icon">
            📍
          </div>
          <div className="branch-title">
            <h3>Branch 1</h3>
            <span className="branch-badge">Main Location</span>
          </div>
        </div>
        
        <div className="address-container">
          <div className="address-icon">🧭</div>
          <p className="address-text">
            Chhatrapati Shahu Maharaj Jaltaran Talav, MohanNagar Chinchwad 411019
          </p>
        </div>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.9641673965184!2d73.79658758367046!3d18.65086565479492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b82d8d2118a7%3A0x9c31ac927bec54e6!2sShahu%20Maharaj%20Talav!5e0!3m2!1sen!2sin!4v1750436982394!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
          <div className="map-overlay">
            <span>View in Google Maps</span>
          </div>
        </div>
      </div>

      <div className="branch">
        <div className="branch-header">
          <div className="branch-icon">
            📍
          </div>
          <div className="branch-title">
            <h3>Branch 2</h3>
            <span className="branch-badge">Secondary Location</span>
          </div>
        </div>
        
        <div className="address-container">
          <div className="address-icon">🧭</div>
          <p className="address-text">
            Veer Savarkar Udyan, Ganesh Talav, Pradhikaran Rd, Sector 27, Nigadi, Pimpri Chinchwad, Maharashtra 411033
          </p>
        </div>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1531192695447!2d73.76024637605397!3d18.657123682463027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e3bc11779d%3A0x9a324df0fb97bff1!2sVeer%20Savarkar%20Udyan!5e0!3m2!1sen!2sin!4v1750437238493!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
          <div className="map-overlay">
            <span>View in Google Maps</span>
          </div>
        </div>
      </div>
    </div>


      </div>

      <div className="gallerySection" id="gallery">
            <div className="titles-right">
              <h4 style={{marginRight: "10px"}} >Gallery</h4>
            </div>
            <div className="carousel" ref={carouselRef}>
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`carouselItem ${index === activeIndex ? 'active' : ''}`}
                >
                  <img src={src} alt={`Gallery ${index}`} />
                </div>
              ))}
            </div>
          </div>

    <div className="contactUsSection">
    <video
      className="backgroundVideo"
      src={netVideo} 
      autoPlay
      muted
      loop
      playsInline
    />

  <div className="videoOverlayContent">
    <h1>Join</h1>
    <h1>Us</h1>
    <h1>Now</h1>
  </div>
</div>
    </>
  );
};

export default MainContent;
