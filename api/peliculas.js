import api from './api';

//const baseUrl = 'peliculas';

export const getPeliculas = (params) => {

  //return api.get(`${baseUrl}`, { params });
  console.log('PARAMS:'+JSON.stringify(params));
  return api.get(``, { params });
};


