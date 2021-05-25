import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log("Error : ", err));
  }, []);

  console.log(products.length);

  return (
    <div className="ui grid container">
      {products.length &&
        products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
