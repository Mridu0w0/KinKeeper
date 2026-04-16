import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <Navbar/>
            <Outlet />
            <Footer/>
            
        </div>
    );
};

export default MainLayout;