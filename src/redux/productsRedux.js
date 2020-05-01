import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ products }) => products.data;
export const getSingleProduct = ({ products }, productId) => {
  const filtered = products.data.filter((product) => product._id === productId);
  return filtered.length ? filtered[0] : { error: true };
};
export const getCart = ({ products }) => products.cart;

/* thunk creators */
export const fetchAllProducts = () => {
  return (dispatch, getState) => {
    const { products } = getState();

    if (products.data.length === 0 && products.loading.active === false) {
      dispatch(fetchStarted());

      Axios.get(`${api.url}/${api.products}`)
        .then((res) => {
          dispatch(fetchSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const postCartRequest = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    const store = getState();
    const cart = store.products.cart;
    const user = store.users.data;

    const productIds = {
      products: [],
      user: user[0],
    };

    for (let product in cart) {
      productIds.products.push(cart[product]._id);
    }

    Axios.post(`${api.url}/${api.carts}`, productIds)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* action name creator */
const reducerName = 'products';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const INCREASE_AMOUNT = createActionName('INCREASE_AMOUNT');
const DECREASE_AMOUNT = createActionName('DECREASE_AMOUNT');
const CLEAR_CART = createActionName('CLEAR_CART');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART });
export const increaseAmount = (payload) => ({ payload, type: INCREASE_AMOUNT });
export const decreaseAmount = (payload) => ({ payload, type: DECREASE_AMOUNT });
export const clearCart = (payload) => ({ payload, type: CLEAR_CART });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      console.log('ADD_TO_CART_REDUCER', action.payload);
      return {
        ...statePart,
        cart: statePart.cart.some((product) => product._id === action.payload._id) ? statePart.cart : [...statePart.cart, action.payload],
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case REMOVE_FROM_CART: {
      console.log('REMOVE_FROM_CART', action.payload);
      return {
        ...statePart,
        cart: statePart.cart.filter((product) => product.id !== action.payload),
      };
    }
    case INCREASE_AMOUNT: {
      console.log('INCREASE_AMOUNT', action.payload);
      return {
        ...statePart,
        cart: statePart.cart.map((product) =>
          product.id === action.payload.id ? { ...product, amount: action.payload.amount + 1 } : product,
        ),
      };
    }
    case DECREASE_AMOUNT: {
      console.log('DECREASE_AMOUNT', action.payload);
      return {
        ...statePart,
        cart: statePart.cart.map((product) =>
          product.id === action.payload.id ? { ...product, amount: action.payload.amount - 1 } : product,
        ),
      };
    }
    case CLEAR_CART:
      console.log('CLEAR_CART_REDUCER');
      return {
        ...statePart,
        cart: [],
        loading: {
          active: false,
          error: false,
        },
      };
    default:
      return statePart;
  }
};
