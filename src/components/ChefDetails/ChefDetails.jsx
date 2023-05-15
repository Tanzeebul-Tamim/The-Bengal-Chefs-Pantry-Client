import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ChefBio from "../ChefBio/ChefBio";
import ChefRecipes from "../ChefRecipes/ChefRecipes";


const ChefDetails = () => {
  const chefDetail = useLoaderData();
  useTitle(`${chefDetail.name} -`)
  return (
    <div className="container d-flex align-items-center flex-column justify-content-center my-5">
      <ChefBio chefDetail={chefDetail}></ChefBio>
      <ChefRecipes chefDetail={chefDetail}></ChefRecipes>
    </div>
  );
};

export default ChefDetails;
