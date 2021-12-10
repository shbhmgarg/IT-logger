import {
  SET_LOADING,
  GET_TECHS,
  DELETE_TECH,
  TECHS_ERROR,
  ADD_TECH,
} from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS: {
      return {
        ...state, 
        techs: action.payload,
        loading: false
      }
    }
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false
      }
    case DELETE_TECH:
      return {
        ...state,
        loading: false,
        techs: state.techs.filter((tech) => tech.id !== action.payload)
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
