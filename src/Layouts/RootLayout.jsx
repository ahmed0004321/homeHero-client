import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div>
             <NavBar></NavBar>
            <main className='pt-24 min-h-[calc(100vh-100px)] mx-auto max-w-[1440px]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;