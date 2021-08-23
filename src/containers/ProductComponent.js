import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products[0].title !== "Tripling" &&
        products.map((value, key) => (
          <div class="">
            <Link to={`/product/${value.id}`}>
              <div
                className="border rounded-sm hover:shadow-md border-gray-200"
                style={{ width: "18rem" }}
              >
                <img
                  src={value.image}
                  className="h-80 mx-auto block my-3"
                  alt="..."
                />
                <div className="w-full bg-gray-100 p-4">
                  <h5 className="card-title text-lg font-bold">
                    {Math.round(value.price) - 0.01}
                    <sup>$</sup>
                  </h5>
                  <p className="card-text truncate">{value.title}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
};

export default ProductComponent;
