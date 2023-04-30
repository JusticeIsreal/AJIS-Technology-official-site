import Link from "next/link";
import React from "react";

function Services() {
  const Services = [
    {
      id: "2",
      service: "E-Commerce",
      img: "/Screenshot 2023-04-30 at 01.31.39.png",
      desc: "Carry your busines to a wider audience on the world wide web, make easy and smooth sales transactions.",
    },
    {
      id: "3",
      service: "Business website",
      img: "/igor-miske-Px3iBXV-4TU-unsplash.jpg",
      desc: "We create stunning, responsive websites that tell your story in a dramatic and visually appealing way.",
    },
    {
      id: "6",
      service: "SEO",
      img: "/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg",
      desc: "Help new customers find your brand by improving your search engine rankings. Our SEO strategies will increase your website’s searchability, visibility, and relevance.",
      link: "/uiux",
    },
    {
      id: "3",
      service: "Site maintenace",
      img: "/Support_mockup.png",
      desc: "Our in-house web development team are experts at leveraging current trends and technologies to support your online presence and help you reach your goals.",
    },
    // {
    //   id: "4",
    //   img: "/Support_mockup.png",
    //   link: "/design",
    // },
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
