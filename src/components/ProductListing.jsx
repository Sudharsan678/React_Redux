import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import  {setProducts} from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://api.escuelajs.co/api/v1/products")
            .catch((err) => {
                alert("Err",err)
            });
            dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchProducts();
    }, []); 
    console.log("Products: ",products); 
    return (
        <div className="ui gird container">
            <ProductComponent />
        </div>
    )

}

export default ProductListing;