import React from "react";
import AboutHero from "./hero";
import DetailsBanner from "./banner/banner";
import Faqs from "./faqs/faqs";
import AboutStory from "./our-story";
import Reviews from "./review";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <DetailsBanner />
      <Reviews />
      <Faqs />
    </div>
  );
};

export default AboutPage;
