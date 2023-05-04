import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import './Main.css';
import ScrollToTop from './ScrollToTop/ScrollToTop';


const Main = () => {
    return (
        <div id="dark">
            <ScrollToTop></ScrollToTop>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;