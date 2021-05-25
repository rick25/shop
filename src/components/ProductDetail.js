import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";

const ProductDetail = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const { title, price, description, category, image } = product;

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  if (loading) {
    return <h2>{`Traendo Producto ${productId}`}</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider"></div>
            <div className="aligned row">
              <div className="column lp middle">
                <img className="ui fluid image" src={image} alt="" />
              </div>

              <div className="column rp" style={{ textAlign: "left" }}>
                <h1>{title}</h1>
                <h2>
                  <a
                    className="ui teal tag label large"
                    href={`/products/${productId}`}
                  >
                    $ {price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div
                  className="ui vertical animated button primary"
                  tabIndex="0"
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Agregar al Carrito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
