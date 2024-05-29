import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetails from "./pages/ProductDetails";
import ErrorPage from './pages/ErrorPage';
const Index = () => {

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path='/shop/:id' element={<ProductDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/*"element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
}

export default Index;