import axios from 'axios';
import { api } from '../settings';

/* SELECTORS */
// export const getRequest = ({ photos }, name) => photos.requests[name];
// export const getTrendingPhotos = ({ photos }) => [...photos.data].sort((a, b) => (a.votes > b.votes) ? -1 : 1).slice(0, 4);
// export const getPhotos = ({ photos }) => photos.data;
// export const getPhoto = ({ photos }, id) => photos.data.find(photo => photo._id === id);

/* ACTIONS */

// action name creator
const reducerName = 'forms';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const ADD_FORM = createActionName('ADD_FORM');

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const addForm = (payload) => ({ payload, type: ADD_FORM });

/* THUNKS */

export const addFormRequest = (data) => {
  return async (dispatch) => {
    dispatch(startRequest({ name: ADD_FORM }));
    try {
      let res = await axios.post(`${api.url}/${api.forms}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch(addForm(res.data));
      dispatch(endRequest({ name: ADD_FORM }));
    } catch (error) {
      dispatch(errorRequest({ name: ADD_FORM, error: error.message }));
    }
  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
};

/* REDUCER */

export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FORM:
      console.log('ADD_FORM_REDUCER', action.payload);
      return { ...statePart, data: [...statePart.data, action.payload] };
    case START_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return {
        ...statePart,
        requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.message, success: false } },
      };
    default:
      return statePart;
  }
};
