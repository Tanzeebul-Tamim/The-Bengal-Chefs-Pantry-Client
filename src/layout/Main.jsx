import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import './Main.css';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Main = () => {
    return (
        <div id="dark">
            <ScrollToTop></ScrollToTop>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"/>
        </div>
    );
};

export default Main;