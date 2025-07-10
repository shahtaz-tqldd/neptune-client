import React from "react";
import Hero from "./hero";
import BestSeller from "./best-seller";
import NewCollections from "./new-collections";
import Trending from "./trending";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <NewCollections />
      <Trending />
    </div>
  );
};

export default Homepage;
