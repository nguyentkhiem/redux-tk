import { takeEvery, put } from 'redux-saga/effects';
import { UsersService } from 'services/api';
import { AUTH } from 'shared/definitions/saga-type';
import { loginLoading, loginSuccess } from 'redux-setup/auth';
import { HttpApi } from 'services/http';

function* fetchUserLogin(action: any) {
  try {
    const user: ResponseGenerator = yield UsersService.getCurrentUserInfo({ params: {} });

    if (user?.body?.id) {
      yield put(
        loginSuccess({
          userId: user?.body?.id,
          user: user?.body,
          isLogin: true,
          permissions: HttpApi.getUserPermissions({
            ...user?.body,
          }),
          role: HttpApi.getUserRole(user?.body),
        }),
      );
    }

    yield put(loginLoading(false));
  } catch (error) {
    yield put(loginLoading(false));
  }
}

export default function* rootSaga() {
  yield takeEvery(AUTH.FETCH_USER_LOGIN, fetchUserLogin);
}
