import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
            <Blog></Blog>
        </div>
    );
};

export default Home;