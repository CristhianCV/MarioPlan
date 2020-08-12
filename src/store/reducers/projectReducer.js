import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
} from "../types/projectTypes";

const initialState = {
  isLoading: false,
  error: "",
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return { ...state, isLoading: true };
    case CREATE_PROJECT_SUCCESS:
      return { ...state, isLoading: false, error: "" };
    case CREATE_PROJECT_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
