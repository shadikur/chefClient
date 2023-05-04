import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Recepie from "./../recepie/Recepie";

const ChefsProfile = () => {
  const ChefsProfileData = useLoaderData();
  console.log(ChefsProfileData);
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
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
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={ChefsProfileData.chef_picture}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="divider"></div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Here are some of my <br className="hidden md:block" /> latest
              Recepie
            </h2>
            <p className="text-xs mt-3">
              (** All my Recepie are made with love and care, exclusively for
              the members**)
            </p>
          </div>
          <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                Join as a team
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="md:px-4 lg:px-10">
              <img
                className="rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                Work from anywhere
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className="md:px-4 lg:px-10">
              <img
                className="-rotate-1"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg"
                alt=""
              />
              <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
                Get success
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefsProfile;
