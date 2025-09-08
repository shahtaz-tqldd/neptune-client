import React from "react";
import AboutHero from "./about-hero";
import AboutStats from "./stats";

const HERO_IMG = "https://images.unsplash.com/photo-1573072738379-7c640e17ac4e";

const AboutPage = () => {
  return (
    <div>
      <AboutHero imageUrl={HERO_IMG} />
      <AboutStats />
    </div>
  );
};

export default AboutPage;
