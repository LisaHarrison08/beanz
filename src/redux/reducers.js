import { combineReducers } from 'redux';
import { SET_PRODUCTS, SET_LOADING } from './actions';

const initialState = {
  products: [],
  loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  Reducer,
});

export default rootReducer;
