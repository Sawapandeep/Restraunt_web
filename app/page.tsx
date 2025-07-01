"use client";
import { Desserts } from "./containers/desserts";
import { Drinks } from "./containers/drinks";
import { Munchies } from "./containers/munchies";
import CarouselContainer from "./containers/CarouselContainer";
import CTA from "./containers/cta";
import Footer from "./containers/Footer";
import Navbar from "./containers/Navbar";
import { Testimonials } from "./containers/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselContainer />
      {/* <FoodGallery /> */}
      <Munchies />
      <Drinks />
      <CTA />
      <Desserts />

      <Testimonials />
      <Footer />
    </div>
  );
}

