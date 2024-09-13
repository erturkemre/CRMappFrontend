import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/userAction";

const initialState = {
  user: {
    username: null,
    email: null,
    role: null,
    createdAt: null,
    updatedAt: null,
  },
  token: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          username: action.payload.username,
          email: action.payload.email,
          role: action.payload.role,
          createdAt: action.payload.createdAt,
          updatedAt: action.payload.updatedAt,
        },
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
