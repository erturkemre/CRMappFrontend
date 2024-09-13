import { CLEAR_ERROR,SET_ERROR,SET_LOADING } from "../actions/globalAction";

const initialState = {
    loading: false,
    error: null,
  };
  
  const globalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload,
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      case 'CLEAR_ERROR':
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default globalReducer;
  