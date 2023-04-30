import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="website-banner-main-con banner-main-con banner">
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
        <h2 className="banner-heading-table">GRAPHIC DESIGN</h2>
        <h2 className="banner-heading-mobile-desktop">GRAPHIC DESIGN</h2>
        <p>
          We create stunning, responsive websites that tell your story in a
          dramatic and visually appealing way.
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
