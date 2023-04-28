import React from "react";

function Aboutus() {
  return (
    <div className="about-us">
      <div className="video-con">
        <img src="/jessy-smith-zFOm6KzA-7g-unsplash.jpg" alt="" />
      </div>
      <div className="about-txt-con">
        <h1>
          <span>who</span> we are
        </h1>

        <p>
          From mobile app development and product design to website development
          and graphic design, we are your source for effective digital presence
          and strategies. Utilizing our comprehensive targeting and eye-catching
          projects, we deliver quality leads, sales, and brand exposure for our
          clients.
        </p>
        <h4>Goals:</h4>
        <div className="goal-img">
          <img src="/1B+-01-01.png" alt="" />
          <img src="/3M+-01-01-01.png" alt="" />
          <img src="/10k+-01-01.png" alt="" />
        </div>
        <div className="lets-talk-btn">
          <button>Let's talk !</button>
        </div>
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
