import Link from "next/link";
import React from "react";

function Services() {
  const Services = [
    {
      id: "3",
      service: "Product design",
      img: "/business-design-corporate-identity-template-logo-label-brand-promotion-HYM9J2.jpeg",
      desc: "Our trained team of designers can help establish your branding so that your first impression is a memorable one..",
    },
    {
      id: "2",
      service: "Ui / Ux",
      img: "/tirza-van-dijk-o1SKqmgSDbg-unsplash.jpg",
      desc: "Our team of designers create all types of resources and tools to disseminate your message. From presentation design to informative digital flyers, we’ll develop the on-brand assets you need.",
    },
    {
      id: "4",
      service: "Interface",
      img: "/create-website-ui-ux-desi-selar.co-62719fcd2cd6c.jpg ",
      desc: "Stand out in the digital space with scroll-stopping motion graphics and static designs . Our dynamic, eye-catching creative captures the attention of online users and drives results.",
    },
    {
      id: "6",
      service: "Logos / Branding",
      img: "/marvin-meyer-JAvWcpZmyUQ-unsplash.jpg",
      desc: "Needing additional design work or assets? Rather than pay a la carte, get a standard logo to meet your class in the leaque of great companies.",
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
