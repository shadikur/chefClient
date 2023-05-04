import React from "react";

const RecipeCard = ({ recipeData }) => {
  console.log(recipeData);
  return (
    <div>
      {/* <div className="md:px-4 lg:px-10">
        <img
          className="-rotate-1 object-cover rounded-2xl w-[300px] h-[300px]"
          src={recipeData.photo}
          alt=""
        />
        <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
          {recipeData.recipe_name}
        </h3>
        <p className="mt-4 text-base text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div> */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={recipeData.photo}
            alt="Shoes"
            className="rounded-xl w-[300px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipeData.recipe_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
