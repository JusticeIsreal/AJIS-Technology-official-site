import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="banner-main-con">
      <div className="image-logo-con">
        <Image
          src="/AJIS FILE 1.png"
          alt="logo"
          fill
          sizes="100vw"
          className="logo-image"
        ></Image>
      </div>
      <div className="banner-text">
        <h2 className="banner-heading-table">EXPERTS IN TECH SERVICES</h2>
        <h2 className="banner-heading-mobile-desktop">
          EXPERTS IN TECH SERVICES
        </h2>
        <p>
          Leverage our experience and expertise <br /> to deliver next-level
          results.
        </p>
        <div className="lets-talk-btn">
          <button>Let's talk !</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
