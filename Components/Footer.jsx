import React from "react";

const menu = [
  {
    name: "Services",
    links: [
      { title: "Mobile app development", url: "/mobileapp" },
      { title: "Website development", url: "/website" },
      { title: "UI/ UX", url: "/uiux" },
      { title: "Graphics Design", url: "/design" },
    ],
  },
];

import { BsWhatsapp } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Footer() {
  return (
    <div className="Footer">
      <div className="BottomBar">
        {menu.map(({ name, links }) => (
          <div className="Menu">
            <div className="MenuHead">{name}</div>
            {links.map(({ title, url }) => (
              <a className="MenuLink" href={url}>
                {title}
              </a>
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
            <a href="tel:+9029356196" target="_blank">
              <AiOutlinePhone className="footer-icon" />
            </a>
            <a href="https://wa.me/+2348104015180" target="_blank">
              <BsWhatsapp className="footer-icon" />
            </a>
            <a
              href="https://web.facebook.com/justice.agbonma?_rdc=1&_rdr"
              target="_blank"
            >
              <CiFacebook className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/ajis_tech" target="_blank">
              <BsInstagram className="footer-icon" />
            </a>
            <a target="_blank" href="mailto:ajistechnology@gmail.com">
              <AiOutlineMail className="footer-icon" />
            </a>
          </div>
          <div className="PolicyRow">
            AJIS TECHNOLOGY is a leading technology company that specializes in
            building innovative software solutions for businesses. Our mission
            is to empower businesses with technology solutions that streamline
            their operations, enhance their customer experience, and drive
            growth. We are committed to delivering high-quality, cost-effective
            solutions that help businesses achieve their goals.
          </div>
          <div className="PolicyRow">
            Justice Isreal Agbonma (Founder / CEO){" "}
            <a href="https://justice-agbonma.vercel.app/" target="_blank">
              View profile
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
