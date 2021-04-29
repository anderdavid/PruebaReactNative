import { takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import {
  fetchGetPeliculas,
} from './fetch';

export default function* root() {
  yield takeLatest(types.GET_PELICULAS, fetchGetPeliculas);
}
