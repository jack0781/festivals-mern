import { FETCH_ALL, FETCH_SEARCH } from '../constants/actionTypes';

import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const searchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.searchPosts();
    dispatch({ type: FETCH_SEARCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


