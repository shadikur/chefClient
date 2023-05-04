import React from "react";

const RecipeCard = ({ recipeData }) => {
  console.log(recipeData);
  return (
    <div>
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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
