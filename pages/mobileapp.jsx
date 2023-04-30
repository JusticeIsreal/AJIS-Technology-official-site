import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/home/Navbar";
import Aboutus from "@/Components/mobileapp/Aboutus";
import Banner from "@/Components/mobileapp/Banner";
import Services from "@/Components/mobileapp/Services";
import React from "react";

function mobileapp() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Aboutus />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default mobileapp;
