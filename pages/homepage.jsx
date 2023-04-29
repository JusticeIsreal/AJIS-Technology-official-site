import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Aboutus from "@/Components/home/Aboutus";
import Banner from "@/Components/home/Banner";
import Navbar from "@/Components/home/Navbar";
import Services from "@/Components/home/Services";
import Teamwork from "@/Components/home/Teamwork";
import React from "react";

function homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <Aboutus />
      <Services />
      <Teamwork />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default homepage;
