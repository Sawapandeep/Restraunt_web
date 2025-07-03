"use client";

import CarouselContainer from "./containers/CarouselContainer";

import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import { Testimonials } from "./containers/Testimonials";
import Main from "./containers/Main";
import AboutUs from "./containers/AboutUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      <Main />
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
