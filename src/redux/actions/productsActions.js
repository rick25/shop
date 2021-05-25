import axios from "axios";

import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../constants/action-types";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = (product) => ({
  type: REMOVE_SELECTED_PRODUCT,
  payload: product,
});

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure("No se encontraron los productos"));
      });
  };
};

export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (product) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: product,
});

export const fetchProductFailure = (errorMessage) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: errorMessage,
});

export const fetchProduct = (productId) => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductFailure("No se encontro el producto."));
      });
  };
};
