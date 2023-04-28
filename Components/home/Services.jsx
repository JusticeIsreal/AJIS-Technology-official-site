import Link from "next/link";
import React from "react";

function Services() {
  const Services = [
    {
      id: "1",
      service: "Mobile app",
      desc: "All-in-one mobile solution for digital business services",
      img: "/the-average-tech-guy-DsmDqiYduaU-unsplash.jpg",
      link: "/mobileapp",
    },
    {
      id: "2",
      service: "Ui / Ux",
      desc: "Stay top-of-mind with your audience with consistent digital designs.",
      img: "/alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg",
      link: "/uiux",
    },
    {
      id: "3",
      service: "Website",
      desc: "Custom websites to enhance your company's image.",
      img: "/igor-miske-JVSgcV8_vb4-unsplash.jpg",
      link: "/website",
    },
    {
      id: "4",
      service: "Graphics",
      desc: "Our in-house team of professional designers can meet all of your design needs.",
      img: "/onur-binay-wi3xBnWZlvQ-unsplash.jpg",
      link: "/design",
    },
  ];

  return (
    <div className="service">
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
          <Link href={link}>
            <div className="card-btn">
              <button>See more</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
