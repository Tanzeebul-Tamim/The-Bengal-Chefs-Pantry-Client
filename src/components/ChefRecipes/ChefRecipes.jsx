import React from 'react';
import './ChefRecipes.css';
import Button from 'react-bootstrap/Button';
import { FaHeart } from "react-icons/fa";

const ChefRecipes = ({chefDetail}) => {
    const recipes = chefDetail.recipe;
    return (
        <div className='my-5 row'>
            <h2 className='text-warning text-center my-4' id="recipe-collection-title">Discover the Delicious Creations of Mr. {chefDetail.name}</h2>
            {
                recipes.map(recipeDetail => {
                    return (
                        <div key={recipeDetail.id} className='col-md-6 g-3'>
                            <div style={{height: "100%"}} id="recipe-card" className='bg-warning'>
                                <div>
                                    <img style={{width: "100%", height: "400px"}} src={recipeDetail.img} />
                                </div>
                                <div className='p-3'>
                                    <Button id='btn-fav' className='d-flex align-items-center gap-2' variant="dark">
                                        <span>Add to Favourite</span> <FaHeart/>
                                    </Button>
                                </div>
                                <div className='d-flex px-4 pb-4 flex-column justify-content-center' id='recipe-texts'>
                                  <h2 className='fw-bold mb-4 text-center'>{recipeDetail.name}</h2>
                                  <div className='row'>
                                    <div className='col-md-6'>
                                        <h5 className='fw-bold'>Ingredients</h5>
                                        <ul>
                                            {
                                                recipeDetail.ingredients.map((ingredient, index) => {
                                                return (
                                                    <li key={index} style={{listStyle: "disc"}}>
                                                        {ingredient}
                                                    </li>
                                                );
                                            }
                                            )}
                                        </ul>
                                    </div>
                                    <div className='col-md-6'>
                                        <h5 className='fw-bold'>Cooking Method</h5>
                                        <ul>
                                            {
                                                recipeDetail.method?.map(step => {
                                                    return (
                                                        <li style={{listStyle: "disc"}}>
                                                            {step}
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ChefRecipes;