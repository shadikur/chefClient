import React, { useEffect, useState } from "react";
import ChefCard from "../chefCard/ChefCard";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://chef-server-sigma.vercel.app/chefsprofile")
      .then((res) => res.json())
      .then((data) => setChefs(data));
    console.log(chefs);
  }, []);

  return (
    <div>
      <section className="py-10 bg-gradient-to-r from-[#8a0a4a] to-[#280e9bc5] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Meet Our Chefs
            </h2>
            <p className="mt-4 text-xl text-white">
              Meet our team of talented chefs who bring their passion for Thai
              cuisine to every dish they create.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14">
            {chefs.map((chef) => (
              <ChefCard key={chef.id} chef={chef}></ChefCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefSection;
