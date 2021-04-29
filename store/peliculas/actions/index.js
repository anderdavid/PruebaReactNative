import types from './types';

//get
export const getPeliculas = (payload) => ({
  type: types.GET_PELICULAS,
  payload
});

export const getPeliculasRequest = () => ({
  type: types.GET_PELICULAS_REQUEST
});

export const getPeliculasSuccess = (payload) => ({
  type: types.GET_PELICULAS_SUCCESS,
  payload
});

export const getPeliculasFailure = (payload) => ({
  type: types.GET_PELICULAS_FAILURE,
  payload
});


