import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/home/Navbar";
import Aboutus from "@/Components/design/Aboutus";
import Banner from "@/Components/design/Banner";
import Services from "@/Components/design/Services";
import React from "react";

function design() {
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

export default design;
