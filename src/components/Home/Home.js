import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeProducts></HomeProducts>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;