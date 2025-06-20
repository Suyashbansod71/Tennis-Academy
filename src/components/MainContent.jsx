import React, {useEffect, useRef, useState } from "react";
import "../styles/landingPage.css";
import whoWeAre from "../images/whoWeAre.png";
import achievements from "../images/achievements.png";
import logoImage from "../images/mainLogo1.jpg";
import downWardArrow from "../images/downwardArrow.png";
import useScrollAnimation from "../hooks/useScrollAnimation";


const MainContent = () => {
  const images = [whoWeAre, achievements, logoImage];
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const handleScroll = () => {
      const items = container.querySelectorAll('.carouselItem');
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
  
      let closestIndex = 0;
      let minDistance = Infinity;
  
      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
  
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
  
      setActiveIndex(closestIndex);
    };
  
    container.addEventListener('scroll', handleScroll, { passive: true });
  
    // Initial detection
    handleScroll();
  
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  

  useScrollAnimation();
  return (
    //Main Content Section Code

    <>
      {/* Who WE Are Section */}
      <div className="whoWeAreSection">
        <div className="titles-right">
          <h4>Who We Are</h4>
          <h6>Sardar Warriors Lawn Tennis Academy</h6>
        </div>

        <div className="whoContent">
          <div className="whoText">
            <img src={whoWeAre} alt="Who We Are" className="whoImage" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration form, buying to injected
              humour, or randomised words. There variations of passages of Lorem
              Ipsum available,
            </p>
          </div>
        </div>
      </div>

{/* Achievements Section */}
      <div className="achievements">
        <div className="titles-left">
          <h4>Achievements</h4>

          <div className="heroSectionAchievements">
            <div className="timeline-container">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <h4>Adira Sandeep Bhagat</h4>
                  <p>
                    U10 - MAHA Rank 2<br />
                    U12 - MAHA Rank 12
                  </p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <h4>Sejal Arun Jadhav</h4>
                  <p>
                    U10 - MAHA Rank 2<br />
                    U12 - MAHA Rank 12
                  </p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-content">
                  <h4>Tasmai Nagesh Pohakar</h4>
                  <p>
                    U10 - MAHA Rank 2<br />
                    U12 - MAHA Rank 12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coaches Section */}
      <div className="coachSection">
      <div className="titles-right">
          <h4>Coaches</h4>
        </div>

        <div className="coachInfo">
              <p><strong>Sardar singh Thakur</strong><br></br> <br></br>ITF level 1 <br></br>NIS/ SAI certified <br></br> ITF National officiate</p>
              {/* <p> ITF level 1 <br></br>NIS/ SAI certified <br></br> ITF National officiate</p> */}

              <p><strong>Shweta Thakur</strong><br></br> <br></br> AITA level II <br></br> AITA fitness level 1 <br></br> ITF National officiating </p>

        </div>
      </div>

      {/* Our Branches Section */}
      <div className="branchSection">
      <div className="titles-left">
          <h4>Our Branches</h4>
        </div>

        <div className="branchDetails">
          <p>Branch 1</p>
          <p>
            Chhatrapati Shahu Maharaj Jaltaran Talav, MohanNagar Chinchwad 411019
          </p>

          {/* Clickable Google Maps embed */}
          <a
            href="https://www.google.com/maps?q=Chhatrapati+Shahu+Maharaj+Jaltaran+Talav,+MohanNagar,+Chinchwad,+411019"
            target="_blank"
            rel="noopener noreferrer"
          >
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.9641673965184!2d73.79658758367046!3d18.65086565479492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b82d8d2118a7%3A0x9c31ac927bec54e6!2sShahu%20Maharaj%20Talav!5e0!3m2!1sen!2sin!4v1750436982394!5m2!1sen!2sin" 
           width="400" 
           height="300" 
           style={{"border":0, borderRadius: "20px"}} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
           </iframe>
          </a>


          <p>Branch 2</p>
          <p>
          Veer savarkar udyan ganesh talav pradhikaran rd, sector no. 27, pradhikaran, nigadi, Pimpri Chinchwad, maharashtra 411033
          </p>

          {/* Clickable Google Maps embed */}
          <a
            href="https://www.google.com/maps?q=Chhatrapati+Shahu+Maharaj+Jaltaran+Talav,+MohanNagar,+Chinchwad,+411019"
            target="_blank"
            rel="noopener noreferrer"
          >
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1531192695447!2d73.76024637605397!3d18.657123682463027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e3bc11779d%3A0x9a324df0fb97bff1!2sVeer%20Savarkar%20Udyan!5e0!3m2!1sen!2sin!4v1750437238493!5m2!1sen!2sin" 
           width="400" 
           height="300" 
           style={{"border":0, borderRadius: "20px"}} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">

           </iframe>
          </a>
        </div>

      </div>

      {/* Gallery Section */}
      <div className="gallerySection">
      <div className="titles-right">
          <h4>Gallery</h4>
        </div>
  <div className="carousel">
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
    </>
  );
};

export default MainContent;

{
  /* <p>TechVolution emerges as a brainchild of visionary tech enthusiasts, driven by the belief in the transformative power of innovation. TechVolution expands its reach, attracting larger audiences </p> */
}
