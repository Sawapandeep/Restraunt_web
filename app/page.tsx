"use client";

import CarouselContainer from "./containers/CarouselContainer";

import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import { Testimonials } from "./containers/Testimonials";
import Menu from "./containers/Menu";
import AboutUs from "./containers/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      <Menu/>
      {/* <FoodGallery /> */}
      {/* <Munchies />
      <Drinks />
      <CTA />
      <Desserts /> */}

      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
}
