import React from "react";

function Services() {
  const Services = [
    {
      id: "1",
      service: "mobile app",
      desc: "All-in-one mobile solution for digital business services",
      img: "/the-average-tech-guy-DsmDqiYduaU-unsplash.jpg",
    },
    {
      id: "2",
      service: "Product design",
      desc: "Stay top-of-mind with your audience with consistent digital designs.",
      img: "/alvaro-reyes-zvmZiw3vdsQ-unsplash.jpg",
    },
    {
      id: "3",
      service: "Website",
      desc: "Custom websites to enhance your company's image.",
      img: "/igor-miske-JVSgcV8_vb4-unsplash.jpg",
    },
    {
      id: "4",
      service: "Design",
      desc: "Our in-house team of professional designers can meet all of your design needs.",
      img: "/onur-binay-wi3xBnWZlvQ-unsplash.jpg",
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

function SingleServices({ id, service, desc, img }) {
  return (
    <div className="card">
      <img src={img} alt="" />
    </div>
  );
}
