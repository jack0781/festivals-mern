import { FETCH_ALL, FETCH_SEARCH} from '../constants/actionTypes';

export default  (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_SEARCH:
      return [action.payload];
    default:
      return posts;
  }
};


