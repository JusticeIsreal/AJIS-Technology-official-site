import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/home/Navbar";
import Aboutus from "@/Components/uiux/Aboutus";
import Banner from "@/Components/uiux/Banner";
import Services from "@/Components/uiux/Services";
import React from "react";

function uiux() {
  return (
    <div>
      {" "}
      <Navbar />
      <Banner />
      <Aboutus />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default uiux;
