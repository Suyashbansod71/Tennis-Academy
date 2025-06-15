import React from "react";
import "../styles/landingPage.css";
import whoWeAre from "../images/whoWeAre.png";
import achievements from "../images/achievements.png";
import logoImage from "../images/mainLogo1.jpg";
import downWardArrow from "../images/downwardArrow.png";
import useScrollAnimation from "../hooks/useScrollAnimation";

const MainContent = () => {
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
    </>
  );
};

export default MainContent;

{
  /* <p>TechVolution emerges as a brainchild of visionary tech enthusiasts, driven by the belief in the transformative power of innovation. TechVolution expands its reach, attracting larger audiences </p> */
}
