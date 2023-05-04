import React from "react";
import Newsletter from "../../components/newsletter/Newsletter";
import ChefSection from "../../components/chefSection/ChefSection";
import Whyus from "../../components/whyus/Whyus";

const Home = () => {
  return (
    <div>
      <Whyus></Whyus>
      <ChefSection></ChefSection>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
