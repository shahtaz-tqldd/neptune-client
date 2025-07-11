import React from "react";
import Hero from "./hero";
import NewArrivals from "./new-arrivals";
import NewCollections from "./new-collections";
import Trending from "./trending";
import Details from "./details";
import HotDeals from "./hot-deals";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero />
      <NewArrivals />
      <NewCollections />
      <Trending />
      <Details />
      <HotDeals />
    </React.Fragment>
  );
};

export default Homepage;
