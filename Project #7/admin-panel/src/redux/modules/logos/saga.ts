import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_LOGOS_REQUEST,
  GET_LOGOS_BY_USERID_REQUEST,
  GET_LOGO_ENTITY_REQUEST,
  UPDATE_LOGO_ENTITY_REQUEST,
  CREATE_LOGO_ENTITY_REQUEST,
  DELETE_LOGO_ENTITY_REQUEST,
} from './types';
import {
  getLogosRequest,
  getLogosSuccess,
  getLogosFail,
  getLogosByUserIdRequest,
  getLogosByUserIdSuccess,
  getLogosByUserIdFail,
  getLogoEntityRequest,
  getLogoEntitySuccess,
  getLogoEntityFail,
  updateLogoEntityRequest,
  updateLogoEntitySuccess,
  updateLogoEntityFail,
  createLogoEntityRequest,
  createLogoEntitySuccess,
  createLogoEntityFail,
  deleteLogoEntityRequest,
  deleteLogoEntitySuccess,
  deleteLogoEntityFail,
  clearLogosDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { LogosDataService } from '../../../services';

function* getLogos() {
  try {
    const logosData = yield call(LogosDataService.getLogosData);
    yield put(getLogosSuccess(logosData));
  } catch (err) {
    if (!err.response) {
      yield put(getLogosFail('Network error'));
      return;
    }
    yield put(getLogosFail(err.response.data.message));
  }
}

function* getLogosByUserId({ payload }: ReturnType<typeof getLogosByUserIdRequest>) {
  try {
    const logosData = yield call(LogosDataService.getLogosByUserIdData, payload);
    yield put(getLogosByUserIdSuccess(logosData));
  } catch (err) {
    if (!err.response) {
      yield put(getLogosByUserIdFail('Network error'));
      return;
    }
    yield put(getLogosByUserIdFail(err.response.data.message));
  }
}

function* getLogoEntity({ payload }: ReturnType<typeof getLogoEntityRequest>) {
  try {
    const logoEntityData = yield call(LogosDataService.getLogoEntityData, payload);
    yield put(getLogoEntitySuccess(logoEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getLogoEntityFail('Network error'));
      return;
    }
    yield put(getLogoEntityFail(err.response.data.message));
  }
}

function* addLogoEntity({ payload }: ReturnType<typeof createLogoEntityRequest>) {
  const {
    link,
  } = payload;
  const formData = new FormData();

  formData.append('link', link);

  try {
    const logoEntityData = yield call(LogosDataService.addLogoEntityData, formData);
    yield put(createLogoEntitySuccess(logoEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createLogoEntityFail('Network error'));
      return;
    }
    yield put(createLogoEntityFail(err.response.data.message));
  }
}

function* updateLogoEntity({ payload }: ReturnType<typeof updateLogoEntityRequest>) {
  try {
    yield call(LogosDataService.updateLogoEntityData, payload);
    yield put(updateLogoEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateLogoEntityFail('Network error'));
      return;
    }
    yield put(updateLogoEntityFail(err.response.data.message));
  }
}

function* deleteLogoEntity({ payload }: ReturnType<typeof deleteLogoEntityRequest>) {
  try {
    yield call(LogosDataService.deleteLogoEntityData, payload);
    yield put(deleteLogoEntitySuccess());
    yield put(clearLogosDataState());
    yield put(getLogosRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteLogoEntityFail('Network error'));
      return;
    }
    yield put(deleteLogoEntityFail(err.response.data.message));
  }
}

const logosDataSaga = all([
  takeLatest(GET_LOGOS_REQUEST, getLogos),
  takeLatest(GET_LOGOS_BY_USERID_REQUEST, getLogosByUserId),
  takeLatest(GET_LOGO_ENTITY_REQUEST, getLogoEntity),
  takeLatest(UPDATE_LOGO_ENTITY_REQUEST, updateLogoEntity),
  takeLatest(CREATE_LOGO_ENTITY_REQUEST, addLogoEntity),
  takeLatest(DELETE_LOGO_ENTITY_REQUEST, deleteLogoEntity),
]);

export default logosDataSaga;
