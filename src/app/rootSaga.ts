import { all } from '@redux-saga/core/effects';
import counterSaga from 'features/counter/counterSage';

function* helloSaga() {
  // console.log("Hello sage");
}

export default function* rootSage() {
  // console.log("root saga");

  yield all([helloSaga(), counterSaga()]);
}
