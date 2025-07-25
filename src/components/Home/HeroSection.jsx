import React from "react";

import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <section className="hero_section">
      <div className="align_center">
        <h2 className="hero_title">{title}</h2>
        <p className="hero_subtitle">{subtitle}</p>
        <Link to={link} className="hero_link">
          Buy now
        </Link>
      </div>
      <div className="align_center">
        <img src={image} className="hero_image" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
