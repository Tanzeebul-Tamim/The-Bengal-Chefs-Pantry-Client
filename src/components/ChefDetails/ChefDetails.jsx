import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefBio from "../ChefBio/ChefBio";
import ChefRecipes from "../ChefRecipes/ChefRecipes";


const ChefDetails = () => {
  const chefDetail = useLoaderData();

  return (
    <div className="container d-flex align-items-center flex-column justify-content-center my-5">
      <ChefBio chefDetail={chefDetail}></ChefBio>
      <ChefRecipes chefDetail={chefDetail}></ChefRecipes>
    </div>
  );
};

export default ChefDetails;
