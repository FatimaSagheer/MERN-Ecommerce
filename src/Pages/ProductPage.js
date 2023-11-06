import React from 'react'
import ProductDetail from '../features/product/component/ProductDetail'
import Navbar from "../features/Navbar/Navbar";

export default function ProductPage() {
    return (
        <div>
         <Navbar>
         <ProductDetail/>
         </Navbar>
        </div>
    )
}
