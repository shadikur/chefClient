import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Recepie from "./../recepie/Recepie";
import RecipeCard from "../../components/recipeCard/RecipeCard";

const ChefsProfile = () => {
  const ChefsProfileData = useLoaderData();
  console.log(ChefsProfileData);
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 pb-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am <br className="block sm:hidden" />
                {ChefsProfileData.chef_name}
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                {ChefsProfileData.bio}
              </p>
              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300" />
                  <span className="relative pr-3"> Have a question? </span>
                </span>
                <br className="block sm:hidden pl-3" />
                <Link to={`/pages/contact`}>Contact me</Link>
              </p>
            </div>
            <div className="relative">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-2xl"
                src={ChefsProfileData.chef_picture}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="divider m-0 bg-[#660000]"></div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Here are my <br className="hidden md:block" /> top 3 recepies
            </h2>
            <p className="text-xs mt-3">
              All of our recepies are made with love and care, exclusively for
              the members
            </p>
          </div>
          <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            {ChefsProfileData.recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipeData={recipe} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefsProfile;
