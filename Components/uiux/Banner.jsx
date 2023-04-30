import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="website-banner-main-con banner-main-con mobile-app uiux">
      <div className="image-logo-con">
        {/* <Image
          src="/AJIS FILE 1.png"
          alt="logo"
          fill
          sizes="100vw"
          className="logo-image"
        ></Image> */}
      </div>
      <div className="banner-text">
        <h2 className="banner-heading-table">UI / UX</h2>
        <h2 className="banner-heading-mobile-desktop">UI / UX</h2>
        <p>
          Our dynamic, eye-catching creative captures the attention of online
          users and drives results..
        </p>
        <div className="lets-talk-btn">
          <a target="_blank" href="mailto:ajistechnology@gmail.com">
            <button>Let's talk !</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
