import { all, fork } from 'redux-saga/effects';
import { rootSaga as peliculas } from './peliculas';

export default function* rootSaga() {
  yield all([
    fork(peliculas),
  ]);
}
