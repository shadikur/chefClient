import React from "react";
import { FaHeart } from "react-icons/fa";
import ReactStarsRating from "react-awesome-stars-rating";

const RecipeCard = ({ recipeData }) => {
  console.log(recipeData);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={recipeData.photo}
            alt="Shoes"
            className="rounded-xl w-[300px] h-[300px] object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipeData.recipe_name}</h2>
          <p className="flex">
            {recipeData.rating}
            <ReactStarsRating
              count={5}
              value={recipeData.rating}
              size={20}
              activeColor="#ffd700"
              className="flex ps-3"
            />
          </p>
          <p>
            <b>Ingredients:</b> <br />
            {recipeData.ingredients.map((ingredient) => (
              <span className="btn btn-outline btn-sm m-1">{ingredient}</span>
            ))}
          </p>
          <p>
            <b>Method:</b> {recipeData.cooking_method}
          </p>
          <div className="card-actions">
            <button className="btn btn-outline btn-secondary">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
