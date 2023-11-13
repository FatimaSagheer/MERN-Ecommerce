import React from "react";
import ProductList from "../features/product/component/productList";
import Navbar from "../features/Navbar/Navbar";
import CarouselPage from "./CaroselPage"
import Footer from "../features/common/Footer";


function HomePage() {
  return (
    <div>
  
      <Navbar >
        <CarouselPage/>
      <ProductList></ProductList> 
      </Navbar>
      <Footer></Footer>
     
    </div>
  );
}

export default HomePage;
