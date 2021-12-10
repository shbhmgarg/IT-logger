import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "./types";

export const addLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/logs");
      const data = await res.json();

      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch(`/logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });

      clearCurrent();
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};
export const deleteLog = (logId) => {
  return async (dispatch) => {
    try {
      setLoading();

      await fetch(`/logs/${logId}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_LOG,
        payload: logId,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data,
      });
    }
  };
};

// Set current log on editing
export const setCurrent = (log) => {
  return async (dispatch) => {
    dispatch({
      type: SET_CURRENT,
      payload: log,
    });
  };
};

// Clear current log
export const clearCurrent = () => {
  console.log('hi')
  return{
    type: CLEAR_CURRENT
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
