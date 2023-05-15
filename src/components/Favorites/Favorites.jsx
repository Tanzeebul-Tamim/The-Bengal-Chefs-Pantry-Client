import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Favorites = () => {
    useTitle("Favorites -");
    const [favorite, setFavorites] = useState(JSON.parse(localStorage.getItem("favorite")));

    const handleDelete = id => {
        const restDishes = favorite.filter(otherDish => otherDish.id != id);
        localStorage.setItem("favorite", JSON.stringify(restDishes));
        setFavorites(restDishes);
    }

    const handleClearList = () => {
        setFavorites(null);
        localStorage.clear();
    }

    if (favorite) {
        return (
            <div className="container my-5 d-flex flex-column align-items-center">
                <h1 className="text-center mb-4 health-tips-title text-warning">Your Favorite Dishes</h1>
                <div>                                     
                    {
                        favorite.map((dish, i) => {
                            return(
                                <div
                                className='bg-warning mb-3 mt-3 align-items-center gap-2 d-flex p-2 rounded-3'
                                style={{ fontFamily: "Changa"}}
                                key={i}
                                >
                                    <img
                                    style={{height: "186px", width: "186px"}}
                                    src={dish.img}
                                    className="rounded-3"
                                    />
                                    <div style={{width: "100%"}} className='bg-dark text-white p-3 rounded-3'>
                                        <div className='d-flex justify-content-between align-items-center gap-5'>
                                            <h4 className='text-warning fw-bold'>{dish.name}</h4>
                                            <div>
                                                <Link>
                                                    <Button style={{fontSize: "15px", padding: "3px 7px 3px 7px"}} variant='secondary'>View Recipe</Button>
                                                </Link>
                                            </div>
                                        </div>
                                        <h6><strong>Recipe by:</strong> {dish.chefName}</h6>
                                        <h6><strong>Total Ingredients:</strong> {dish.ingredients.length}</h6>
                                        <h6 className='mt-3 text-warning'><strong>Rating</strong></h6>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='bg-secondary d-flex justify-content-between align-items-center px-3 rounded-3'>
                                                <Rating
                                                     className='text-warning' 
                                                     placeholderRating={dish.rating}
                                                     readonly
                                                     emptySymbol={<FaRegStar></FaRegStar>}
                                                     placeholderSymbol={<FaStar></FaStar>}
                                                     fullSymbol={<FaStar></FaStar>}
                                                />
                                                <span className='text-white'>{dish.rating}</span>
                                            </div>
                                            <Button onClick={() => handleDelete(dish.id)} style={{fontSize: "15px", padding: "3px 7px 3px 7px"}} variant='secondary'>Delete Recipe</Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }                                                       
                </div>
                <Button onClick={handleClearList} style={{fontFamily: "changa"}} variant='warning' className='mt-4 text-white fw-bold fs-4'>Clear List</Button>
            </div>
        );
    }
    else {
        return (
            <Container style={{marginTop: "250px", fontFamily: "Changa", marginBottom: "250px"}} className="d-flex flex-column align-items-center gap-5">
                <h1 style={{fontSize: "70px"}} className="fw-bold text-center text-warning">
                  No recipes added yet!
                </h1>
                <Link to="/">
                  <Button className='text-white fs-3' variant='warning'>Back To Homepage</Button>
                </Link>
            </Container>
        );
    }
};

export default Favorites;