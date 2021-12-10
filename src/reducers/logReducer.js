import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR, DELETE_LOG } from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter((log) => log.id != action.payload)
      }
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
