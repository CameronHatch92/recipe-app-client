import {
  FETCH_REQUEST,
  FETCH_ERROR,
  FETCH_SEARCH_SUCCESS
} from '../actions';

const initialState = {
  error: null,
  searchResults: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    case FETCH_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        searchResults: action.results  
      })    
    default:
      return state;  
  }
}