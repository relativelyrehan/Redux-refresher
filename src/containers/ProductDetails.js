import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProducts,
  removeSelectedProduct,
  productAddToCart,
} from "../redux/actions/productActions";
import axios from "axios";

function ProductDetails() {
  const { productId } = useParams();
  const product = useSelector((state) => state.selectedProduct);
  console.log(product);
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    fetchProductDetails();
    return () => dispatch(removeSelectedProduct());
  }, []);

  if (!product.title)
    return (
      <div className="grid h-screen place-items-center text-blue-400 font-semibold text-3xl">
        Loading...
      </div>
    );

  return (
    <div className="container grid grid-cols-2 pt-12 h-screen">
      <div className="col-span-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-1/2 block mx-auto"
        />
      </div>
      <div className="col-span-1 px-12 py-24">
        <h1 className="text-3xl text-gray-800">{product.title}</h1>
        <h3 className="text-xl my-4 text-gray-700">{product.description}</h3>
        <div className="flex gap-x-4 mt-12">
          <button
            onClick={() => dispatch(productAddToCart(product.id))}
            className="bg-blue-400 rounded-md px-4 py-2 text-white font-semibold"
          >
            Add to Cart
          </button>
          <button className="bg-yellow-300 rounded-md px-4 py-2 text-black font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
