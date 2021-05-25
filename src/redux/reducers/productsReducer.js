const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: payload,
        error: "",
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        products: [],
        error: payload,
      };

    default:
      return state;
  }
};
const initalProductState = {
  product: {},
  loading: false,
  error: "",
};
export const selectedProductReducer = (
  state = initalProductState,
  { type, payload }
) => {
  switch (type) {
    case "FETCH_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: payload,
        error: "",
      };
    case "FETCH_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        product: null,
        error: payload,
      };
    default:
      return state;
  }
};
