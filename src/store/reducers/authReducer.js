import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
} from "../types/authTypes";

const initialState = {
  isLoading: false,
  authError: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return { ...state, isLoading: true };
    case SIGNIN_SUCCESS:
      return { ...state, isLoading: false, authError: "" };
    case SIGNIN_ERROR:
      return { ...state, isLoading: false, authError: action.payload };

    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, authError: "" };
    case SIGNUP_ERROR:
      return { ...state, isLoading: false, authError: action.payload };

    case SIGNOUT_REQUEST:
      return { ...state, isLoading: true };
    case SIGNOUT_SUCCESS:
      return { ...state, isLoading: false, authError: "" };
    case SIGNOUT_ERROR:
      return { ...state, isLoading: false, authError: action.payload };
    default:
      return state;
  }
};

export default reducer;
