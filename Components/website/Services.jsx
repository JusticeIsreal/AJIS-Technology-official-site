import Link from "next/link";
import React from "react";

function Services() {
  const Services = [
    {
      id: "1",
      img: "/Screenshot 2023-04-30 at 01.31.39.png",
    },
    {
      id: "2",
      service: "E-Commerce",
      desc: "Stay top-of-mind with your audience with consistent digital designs.",
    },
    {
      id: "3",
      service: "Landing page",
      desc: "Custom websites to enhance your company's image.",
    },
    {
      id: "4",
      img: "/igor-miske-Px3iBXV-4TU-unsplash.jpg",
      link: "/design",
    },
    {
      id: "5",
      img: "/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg",
      link: "/mobileapp",
    },
    {
      id: "6",
      service: "SEO",
      desc: "Stay top-of-mind with your audience with consistent digital designs.",
      link: "/uiux",
    },
    {
      id: "3",
      service: "Site maintenace",
      desc: "Custom websites to enhance your company's image.",
    },
    {
      id: "4",
      img: "/Support_mockup.png",
      link: "/design",
    },
  ];

  return (
    <div className="service website-service">
      <h1>
        what we <span>do</span>
      </h1>
      <div className="single-card">
        {Services.map((pic) => (
          <SingleServices key={pic.id} {...pic} />
        ))}
      </div>
    </div>
  );
}

export default Services;

function SingleServices({ id, service, desc, img, link }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="service-txt">
        <div className="desc">
          <h2>{service}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
