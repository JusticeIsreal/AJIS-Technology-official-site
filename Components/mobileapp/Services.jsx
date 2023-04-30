import Link from "next/link";
import React from "react";

function Services() {
  const Services = [
    {
      id: "3",
      service: "Online store",
      img: "/abillion-bMTl6uFMONg-unsplash.jpg",
      desc: "Our in-house web development team are experts at leveraging current trends and technologies to support your online presence and help you reach your goals.",
    },
    {
      id: "2",
      service: "Enterprise app",
      img: "/mailchimp-mpwF3Mv2UaU-unsplash.jpg",
      desc: "Carry your busines to a wider audience on the world wide web, make easy and smooth sales transactions.",
    },
    {
      id: "4",
      service: "Crypto app",
      img: "/balazs-ketyi-sScmok4Iq1o-unsplash.jpg",
      desc: "We create stunning, responsive websites that tell your story in a dramatic and visually appealing way.",
    },
    {
      id: "6",
      service: "Delievery app",
      img: "/abillion-F0e3AdcwVbM-unsplash.jpg",
      desc: "Help new customers find your brand by improving your search engine rankings. Our SEO strategies will increase your website’s searchability, visibility, and relevance.",
      link: "/uiux",
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
