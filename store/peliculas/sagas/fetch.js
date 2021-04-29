import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import {
  getPeliculas
} from '../../../api/peliculas';

export function* fetchGetPeliculas({ payload }) {
  try {
    yield put(actions.getPeliculasRequest());
    const peliculas = yield call(getPeliculas, payload);
    yield put(actions.getPeliculasSuccess(peliculas));
  } catch (error) {
    const { status, statusText, data } = error;
    yield put(
      actions.getPeliculasFailure({ code: status, statusText, ...data })
    );
  }
}

