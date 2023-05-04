import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner bannerDishes={data.bannerDishes}></Banner>
            <ChefSection chefsSection={data.chefsSection}></ChefSection>
        </div>
    );
};

export default Home;