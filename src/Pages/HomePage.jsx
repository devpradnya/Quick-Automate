import React from "react";
import "../index.css";
import HeroSlider from "../Components/HeroSlider/Heroslider";
import Services from "../Components/Services/Services";
import Keyfeatures from "../Components/KeyFeatures/KeyFeature";
import Features from "../Components/fea/Features";
import Voice from "../Components/VoiceAssistant/Voice";
import Work from "../Components/WorkInfo/Work";
import Testimonail from "../Components/Testimonials/Testimonial";
import Pricing from "../Components/Packages/Pricing";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/nav/Nav";
import FooterBar from "../Components/footerbar/FooterBar";
import Contact from "../Components/Contact/Contact";
import Sidebar from "../Components/SideBar/Sidebar";

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <HeroSlider />
      <Navbar />
      <Services />
      <Keyfeatures />
      <Features />
      <Voice />
      <Work />
      <Testimonail />
      <Pricing />
      <Contact />
      <Footer />
      <FooterBar />
    </>
  );
}
