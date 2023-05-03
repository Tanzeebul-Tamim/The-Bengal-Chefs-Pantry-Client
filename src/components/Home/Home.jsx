import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const bannerDishes = useLoaderData();

    return (
        <div>
            <Banner bannerDishes={bannerDishes}></Banner>
        </div>
    );
};

export default Home;