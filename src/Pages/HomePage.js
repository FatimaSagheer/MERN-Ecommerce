import React from "react";
import ProductList from "../features/product/component/productList";
import Navbar from "../features/Navbar/Navbar";
import CarouselPage from "./CaroselPage"


function HomePage() {
  return (
    <div>
  
      <Navbar >
        <CarouselPage/>
      <ProductList></ProductList> 
      </Navbar>
  
     
    </div>
  );
}

export default HomePage;
