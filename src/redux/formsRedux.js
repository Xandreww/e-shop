import axios from 'axios';
import { api } from '../settings';

/* SELECTORS */
export const getForm = ({ forms }) => forms.data;

/* ACTIONS */

// action name creator
const reducerName = 'forms';
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const ADD_FORM = createActionName('ADD_FORM');
const CLEAR_FORM = createActionName('CLEAR_FORM');

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });
export const addForm = (payload) => ({ payload, type: ADD_FORM });
export const clearForm = (payload) => ({ payload, type: CLEAR_FORM });

/* THUNKS */

export const addFormRequest = (data) => {
  return async (dispatch) => {
    dispatch(startRequest({ name: ADD_FORM }));
    try {
      await axios.post(`${api.url}/${api.forms}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
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
    case CLEAR_FORM:
      console.log('CLEAR_FORM_REDUCER');
      return { ...statePart, data: [] };
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
