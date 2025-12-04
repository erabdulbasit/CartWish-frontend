import React from "react";

import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iphone 14 pro"
        subtitle="Experience the 
      power of the latest iphone 14 with our most pro camera ever."
        link="/product/6875f3814225fe93b7386aa4"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour matched magic 
        accessories to your bag after configure your Mac mini."
        link="/product/6875f3814225fe93b7386aac"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
