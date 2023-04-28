import Aboutus from "@/Components/home/Aboutus";
import Banner from "@/Components/home/Banner";
import Navbar from "@/Components/home/Navbar";
import React from "react";

function homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <Aboutus />
    </div>
  );
}

export default homepage;
