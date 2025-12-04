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
        //changed id from local to database
        link="/product/687f5e249240fbdb3bd8f8da"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour matched magic 
        accessories to your bag after configure your Mac mini."
        //changed id from local to database
        link="/product/687f5e249240fbdb3bd8f8e2"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
