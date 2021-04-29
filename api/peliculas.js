import api from './api';

//const baseUrl = 'peliculas';

export const getPeliculas = (params) => {

  //return api.get(`${baseUrl}`, { params });
  return api.get(``, { params });
};


