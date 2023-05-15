import { all, fork } from '@redux-saga/core/effects';
import { saga as counterSaga } from 'redux-setup/counter';

export default function* rootSaga() {
  yield all([fork(counterSaga)]);
}
