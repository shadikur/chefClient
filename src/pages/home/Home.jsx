import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import ChefSection from "../../components/chefSection/ChefSection";
import About from "../../components/about/About";

const Home = () => {
  return (
    <div>
      <About></About>
      <ChefSection></ChefSection>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
