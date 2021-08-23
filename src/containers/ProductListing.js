import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

function ProductListing() {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-wrap gap-8 items-center justify-center">
        <ProductComponent />
      </div>
    </div>
  );
}

export default ProductListing;
