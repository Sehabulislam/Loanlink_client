import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar ></Navbar>
            </div>
            <main className='w-11/12 mx-auto min-h-[calc(100vh-289px)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;