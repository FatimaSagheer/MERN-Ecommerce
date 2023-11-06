import React from "react";
import ProductList from "../features/product/component/productList";
import Navbar from "../features/Navbar/Navbar";


function HomePage() {
  return (
    <div>
  
      <Navbar >
      <ProductList></ProductList> 
      </Navbar>
  
     
    </div>
  );
}

export default HomePage;
