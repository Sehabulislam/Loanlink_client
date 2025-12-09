import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className="h-fit sticky top-0">
                <Navbar ></Navbar>
            </div>
            <main className='p-1 md:w-11/12 mx-auto min-h-[calc(100vh-289px)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;