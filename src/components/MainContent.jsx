import React from "react";
import "../styles/landingPage.css";
import whoWeAre from "../images/whoWeAre.png"

const MainContent = () => {
  return (

    //Main Content Section Code
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
    but the majority have suffered alteration in some form, buying 
    to injected humour, or randomised words.
  </p>
  <p>
    There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration 
  </p>
  <p>
    There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration form, buying 
    to injected humour, or randomised words. There variations of 
    passages of Lorem Ipsum available,
  </p>

</div>

  </div>
</div>
    

  );
};

export default MainContent;
