"use client";

import CarouselContainer from "./containers/CarouselContainer";
import CTA from "./containers/cta";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import { Testimonials } from "./containers/Testimonials";
import Main from "./containers/Main";

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
      <Footer />
    </div>
  );
}
