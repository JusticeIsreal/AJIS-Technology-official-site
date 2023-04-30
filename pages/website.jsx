import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/home/Navbar";
import Aboutus from "@/Components/website/Aboutus";
import Banner from "@/Components/website/Banner";
import Services from "@/Components/website/Services";
import React from "react";

function website() {
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

export default website;
