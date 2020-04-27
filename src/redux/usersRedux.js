import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getUser = ({ users }) => users.data;

/* thunk creators */

export const postUserRequest = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    console.log('id in thunk:', id);

    Axios.post(`${api.url}/${api.users}`, id)
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* action name creator */
const reducerName = 'users';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_USER = createActionName('ADD_USER');
const CLEAR_USER = createActionName('CLEAR_USER');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addUser = (payload) => ({ payload, type: ADD_USER });
export const clearUser = (payload) => ({ payload, type: CLEAR_USER });

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
    case ADD_USER: {
      console.log('ADD_USER_REDUCER', action.payload);
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case CLEAR_USER:
      console.log('CLEAR_CART_REDUCER');
      return {
        ...statePart,
        data: [],
        loading: {
          active: false,
          error: false,
        },
      };
    default:
      return statePart;
  }
};
