import { combineReducers } from 'redux';
import { createFetchStatusReducer } from '../../../utils/createReducers';
import types from '../actions/types';

export const getPeliculasFetchStatus = createFetchStatusReducer.forAllRegisters(
  {
    FETCH: types.GET_PELICULAS,
    FETCH_REQUEST: types.GET_PELICULAS_REQUEST,
    FETCH_SUCCESS: types.GET_PELICULAS_SUCCESS,
    FETCH_FAILURE: types.GET_PELICULAS_FAILURE
  }
);

export default combineReducers({
 
  getPeliculasFetchStatus,
 
});
