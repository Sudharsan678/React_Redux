import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={ <ProductListing /> } />
            <Route path='/product/product:ID'  element={< ProductDetail />} />
            <Route> 404 Not Found </Route>
            <Route> Please Check your Network connection </Route>
        </Routes>

    )
}
export default Routing;