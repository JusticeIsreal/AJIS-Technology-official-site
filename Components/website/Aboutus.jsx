import React from "react";

function Aboutus() {
  return (
    <div className="websit-about-us about-us">
      {/* <div className="video-con">
        <img src="/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg" alt="" />
      </div> */}

      <div className="about-txt-con website-about-txt-con">
        <div className="website-about-txt-con-text">
          <h1>more than just a website</h1>
          <p>
            At AJIS, We aim to build innovative solutions that help businesses
            grow and succeed in an increasingly digital world. We believe that
            technology should be accessible to all businesses, regardless of
            their size or industry, and we are committed to making our solutions
            affordable and easy to use.
          </p>
        </div>

        {/* <div className="website-goal-img goal-img">
          <img
            src="/scott-webb-GQD3Av_9A88-unsplash-removebg-preview.png"
            alt=""
          />
        </div> */}
        {/* <div className="lets-talk-btn">
          <button>Let's talk !</button>
        </div> */}
        <img
          className="bg-img"
          src="/lucas-sankey-WM6Rj6yITvs-unsplash-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Aboutus;
