import {
  SET_CUSTOMERS,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  SET_LOADING,
  SET_ERROR,
} from "../actions/customerAction";

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
        error: null,
      };

    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        loading: false,
        error: null,
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id
            ? { ...customer, ...action.payload.data } 
            : customer
        ),
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default customerReducer;

