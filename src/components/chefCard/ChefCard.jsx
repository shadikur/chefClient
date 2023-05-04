import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="py-8 px-9 text-center">
          <img
            className="w-32 h-32 rounded-full mx-auto object-cover"
            src={chef.chef_picture}
            alt=""
          />
          <p className="text-lg font-bold text-black">{chef.chef_name}</p>
          <p className="mt-1 text-gray-600 text-500">
            Experience of {chef.years_of_experience} years
          </p>
          <p className="mt-1 text-gray-600 text-500">
            Likes by {chef.likes} people
          </p>
          <p className="mt-1 text-gray-600 text-500">
            {chef.num_recipes}+ recipes
          </p>
          <Link
            to={`/pages/chefsprofile/${chef.id}`}
            className="btn btn-outline btn-primary"
          >
            View Recepie
          </Link>
          <p className="mt-6 text-base text-gray-700">{chef.bio}</p>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
