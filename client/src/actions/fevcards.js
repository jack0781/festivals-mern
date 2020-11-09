import { FETCH_ALL, FETCH_SEARCH } from '../constants/actionTypes';

import * as api from '../api';

export const getFevcards = () => async (dispatch) => {
  try {
    const { data } = await api.getFevcards();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchFevcards = () => async (dispatch) => {
  try {
    const { data } = await api.searchFevcards();
    dispatch({ type: FETCH_SEARCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


