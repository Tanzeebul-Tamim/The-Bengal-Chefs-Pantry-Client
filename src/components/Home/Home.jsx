import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import HealthTips from '../HealthTips/HealthTips';
import TipsAndTricks from '../TipsAndTricks/TipsAndTricks';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Banner bannerDishes={data.bannerDishes}></Banner>
            <ChefSection chefsSection={data.chefsSection}></ChefSection>
            <TipsAndTricks tips={data.tipsAndTricks}></TipsAndTricks>
            <HealthTips healthTips={data.healthTips}></HealthTips>
        </div>
    );
};

export default Home;