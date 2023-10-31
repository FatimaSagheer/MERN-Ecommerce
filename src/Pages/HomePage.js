import React from "react";
import ProductList from "../features/productList/productList";
import Navbar from "../features/Navbar/Navbar";


function HomePage() {
  return (
    <div className="App">
  
      <Navbar >
      <ProductList></ProductList> 
      </Navbar>
  
     
    </div>
  );
}

export default HomePage;
