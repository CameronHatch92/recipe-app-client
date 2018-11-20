import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = (err) => ({
  type: FETCH_ERROR,
  error: err
});

export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const fetchSearchSuccess = (results) => ({
  type: FETCH_SEARCH_SUCCESS,
  results
});

export const fetchSearch = (searchTerm) => (dispatch) => {
  dispatch(fetchRequest());
  return fetch(`${API_BASE_URL}/graphql`, {
    method: 'GET'
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(res => dispatch(fetchSearchSuccess(res)))
  .catch(err => dispatch(fetchError(err)));
}