import React from 'react'
import "./Home.css"
import Crousel from "./Carousel";
import Products from './Products';

 const Home = () => {
    return (
      <div className="home">
         <Crousel />
         <Products/>
      </div>
    );
}
export default Home;
