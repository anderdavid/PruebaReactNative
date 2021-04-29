import types from './types';

//get
export const getPeliculas = (payload) => ({
  type: types.GET_CARGO_SIZES,
  payload
});

export const getPeliculasRequest = () => ({
  type: types.GET_CARGO_SIZES_REQUEST
});

export const getPeliculasSuccess = (payload) => ({
  type: types.GET_CARGO_SIZES_SUCCESS,
  payload
});

export const getPeliculasFailure = (payload) => ({
  type: types.GET_CARGO_SIZES_FAILURE,
  payload
});


