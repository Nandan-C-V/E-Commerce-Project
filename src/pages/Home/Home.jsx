import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import Register from "./Register";
import LocationSprade from "./LocationSprade";

import AppSection from "./AppSection";

import CategoryShowCase from "./CategoryShowCase";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />

      <LocationSprade />

      <AppSection />
    </div>
  );
};

export default Home;
