import Link from "next/link";
import React from "react";

function Services() {
  const Services = [
    {
      id: "3",
      service: "Photoshop",
      img: "/emily-bernal-v9vII5gV8Lw-unsplash.jpg",
      desc: "Our in-house graphic design team are experts at leveraging current trends and technologies to support your online presence and help you reach your goals.",
    },
    {
      id: "2",
      service: "Flyers / poster",
      img: "/mailchimp-mpwF3Mv2UaU-unsplash.jpg",
      desc: "Carry your busines to a wider audience on the world wide web, make easy and smooth sales transactions.",
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
