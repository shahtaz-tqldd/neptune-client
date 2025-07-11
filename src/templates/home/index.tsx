import React from "react";
import Hero from "./hero";
import BestSeller from "./best-seller";
import NewCollections from "./new-collections";
import Trending from "./trending";
import Details from "./details";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <NewCollections />
      <Trending />
      <Details />
    </div>
  );
};

export default Homepage;
