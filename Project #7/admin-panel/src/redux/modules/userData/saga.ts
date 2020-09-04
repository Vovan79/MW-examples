import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import routes from '../../../constants/routes.constants';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  GET_USER_PROFILE_REQUEST,
  GET_USER_DESIGNS_REQUEST,
} from './types';
import {
  loginRequest,
  loginSuccess,
  loginFail,
  logoutSuccess,
  logoutFail,
  getUserProfileSuccess,
  getUserProfileFail,
  getUserDesignsSuccess,
  getUserDesignsFail,
} from './actions';
import { UserDataService } from '../../../services';

function* handleInvalidTokenError() {
  // clear localStorage and redux, redirect to login page
  yield call(UserDataService.removeAuthToken);
  yield put(logoutSuccess());
  // yield put(push(routes.login));
}

function* login(loginData: ReturnType<typeof loginRequest>) {
  try {
    const userData = yield call(UserDataService.login, loginData.payload);
    yield put(loginSuccess(userData));
    yield put(push(routes.panel));
  } catch (err) {
    if (!err.response) {
      yield put(loginFail('Network error'));
      return;
    }
    yield put(loginFail(err.response.data.message));
  }
}

function* logout() {
  try {
    yield call(UserDataService.logout);
    yield put(logoutSuccess());
    yield put(push(routes.root));
  } catch (err) {
    yield put(logoutFail(err));
  }
}

function* getUserProfile() {
  try {
    const userData = yield call(UserDataService.getUserProfile);
    yield put(getUserProfileSuccess(userData));
  } catch (err) {
    if (!err.response) {
      yield put(getUserProfileFail('Network error'));
      return;
    }
    if (err.response.data.statusCode === 401) {
      yield* handleInvalidTokenError();
      return;
    }
    yield put(getUserProfileFail(err.response.data.message));
  }
}

function* getUserDesigns() {
  try {
    const userDesigns = yield call(UserDataService.getUserDesigns);
    yield put(getUserDesignsSuccess(userDesigns));
  } catch (err) {
    if (!err.response) {
      yield put(getUserDesignsFail('Network error'));
      return;
    }
    if (err.response.data.statusCode === 401) {
      yield* handleInvalidTokenError();
      return;
    }
    yield put(getUserDesignsFail(err.response.data.message));
  }
}

const userDataSaga = all([
  takeLatest(LOGIN_REQUEST, login),
  takeLatest(LOGOUT_REQUEST, logout),
  takeLatest(GET_USER_PROFILE_REQUEST, getUserProfile),
  takeLatest(GET_USER_DESIGNS_REQUEST, getUserDesigns),
]);

export default userDataSaga;
