import React from "react";

const menu = [
  {
    name: "Services",
    links: [
      { title: "Mobile app development", url: "www.openfit.com" },
      { title: "Website development", url: "www.openfit.com" },
      { title: "UI/ UX", url: "www.openfit.com" },
      { title: "Graphics Design", url: "www.openfit.com" },
    ],
  },
  {
    name: "Quick links",
    links: [
      { title: "who we are", url: "www.openfit.com" },
      { title: "what we do", url: "www.openfit.com" },
      { title: "our mantra", url: "www.openfit.com" },
      { title: "contact us", url: "www.openfit.com" },
    ],
  },
];

import { BsWhatsapp } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="Footer">
      <div className="BottomBar">
        {menu.map(({ name, links }) => (
          <div className="Menu">
            <div className="MenuHead">{name}</div>
            {links.map(({ title, url }) => (
              <div className="MenuLink" href={url}>
                {title}
              </div>
            ))}
          </div>
        ))}
        <div className="MobileSocialList">
          <div className="SocialList" />
        </div>
        <div className="Policy">
          <div className="PolicyRow">
            © 2022 AJIS TECHNOLOGY. All rights reserved.
          </div>
          <div className="PolicyRow">
            <BsWhatsapp className="footer-icon" />
            <CiFacebook className="footer-icon" />
            <BsInstagram className="footer-icon" />
            <FiTwitter className="footer-icon" />
            <AiOutlineMail className="footer-icon" />
          </div>
          <div className="PolicyRow">
            Consult your physician and follow all safety instructions before
            beginning any exercise program or using any supplement or meal
            replacement product, especially if you have any unique medical
            conditions or needs. The contents on our website are for
            informational purposes only, and are not intended to diagnose any
            medical condition, replace the advice of a healthcare professional,
            or provide any medical advice, diagnosis, or treatment.
          </div>
          <div className="PolicyRow">
            As an Amazon Associate, we may earn from qualifying purchases.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
