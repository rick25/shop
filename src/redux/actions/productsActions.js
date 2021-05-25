import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
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
