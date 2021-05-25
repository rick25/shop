import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";

import { fetchProducts } from "../redux/actions/productsActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <h2>Traendo Productos</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      {!loading &&
        products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductList;
