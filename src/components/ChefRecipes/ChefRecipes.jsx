import React, { useState } from 'react';
import './ChefRecipes.css';
import Button from 'react-bootstrap/Button';
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const ChefRecipes = ({chefDetail}) => {
    const recipes = chefDetail.recipe;
    return (
        <div className='my-5 row'>
            <h2 className='text-warning text-center my-4' id="recipe-collection-title">Discover the Delicious Creations of Mr. {chefDetail.name}</h2>
            {
                recipes.map(recipeDetail => {
                    const [fav, setFav] = useState(false);
                    const handleFav = () => {
                        if(!fav){
                            setFav(true);
                        }
                        toast.warning(`Added ${recipeDetail.name} to your favorites!`, {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    };

                    return (
                        <div key={recipeDetail.id} className='col-md-6 g-3'>
                            <div style={{height: "100%"}} id="recipe-card" className='bg-warning'>
                                <div>
                                    <img style={{width: "100%", height: "400px"}} src={recipeDetail.img} />
                                </div>
                                <div className='p-3 d-flex justify-content-between'>
                                    <Button disabled={fav} onClick={handleFav} className='d-flex btn-fav align-items-center gap-2' variant="dark">
                                        <span>Add to Favourite</span> <FaHeart/>
                                    </Button>
                                    <div className='bg-dark btn-fav d-flex align-items-center gap-2 p-2 rounded-3'>
                                        <Rating
                                             className='text-warning' 
                                             placeholderRating={recipeDetail.rating}
                                             readonly
                                             emptySymbol={<FaRegStar></FaRegStar>}
                                             placeholderSymbol={<FaStar></FaStar>}
                                             fullSymbol={<FaStar></FaStar>}
                                        />
                                        <span className='text-white'>{recipeDetail.rating}</span>
                                    </div>
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
            <div className='text-center mt-5'>
             <Link to="/"><Button className='btn-fav fs-4 fw-bold text-white px-4' variant="warning">Back to Homepage</Button></Link>
            </div>
        </div>
    );
};

export default ChefRecipes;