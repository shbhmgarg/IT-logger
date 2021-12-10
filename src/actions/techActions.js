import {
  GET_TECHS,
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
  DELETE_TECH,
} from "./types";

export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/techs", {
        method: "POST",
        body: JSON.stringify(tech),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
}

export const getTechs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/techs");
      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const deleteTech = (techId) => {
  return async (dispatch) => {
    try {
      setLoading();

      await fetch(`/techs/${techId}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_TECH,
        payload: techId,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};