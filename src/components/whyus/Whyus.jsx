import React from "react";

const Whyus = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Whyus
            </p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hola, Foodies! Get ready to explore the world of food with us.
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 text-green-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Authentic Thai Recipes
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Discover the true flavors of Thailand with our carefully
                    crafted recipes, using traditional techniques and
                    ingredients straight from Thailand.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 text-blue-600 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Expert Chefs
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    Our team of expert chefs are highly skilled in the art of
                    Thai cuisine, with years of experience in both traditional
                    and modern Thai cooking.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  className="flex-shrink-0 text-red-500 w-9 h-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    Quality Ingredients
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    We only use the freshest and highest quality ingredients in
                    our dishes, sourced from local and sustainable suppliers
                    whenever possible, to ensure the best possible flavor and
                    quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://res.cloudinary.com/ddez9nchs/image/upload/v1683216813/Thai-Chef/thai-food-background-2021-09-01-21-14-53-utc-min.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whyus;
