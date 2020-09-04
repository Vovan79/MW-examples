import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_SIZES_REQUEST,
  GET_SIZE_ENTITY_REQUEST,
  UPDATE_SIZE_ENTITY_REQUEST,
  CREATE_SIZE_ENTITY_REQUEST,
  DELETE_SIZE_ENTITY_REQUEST,
} from './types';
import {
  getSizesRequest,
  getSizesSuccess,
  getSizesFail,
  getSizeEntityRequest,
  getSizeEntitySuccess,
  getSizeEntityFail,
  updateSizeEntityRequest,
  updateSizeEntitySuccess,
  updateSizeEntityFail,
  createSizeEntityRequest,
  createSizeEntitySuccess,
  createSizeEntityFail,
  deleteSizeEntityRequest,
  deleteSizeEntitySuccess,
  deleteSizeEntityFail,
  clearSizesDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { SizesDataService } from '../../../services';

function* getSizes() {
  try {
    const sizesData = yield call(SizesDataService.getSizesData);
    yield put(getSizesSuccess(sizesData));
  } catch (err) {
    if (!err.response) {
      yield put(getSizesFail('Network error'));
      return;
    }
    yield put(getSizesFail(err.response.data.message));
  }
}

function* getSizeEntity({ payload }: ReturnType<typeof getSizeEntityRequest>) {
  try {
    const sizeEntityData = yield call(SizesDataService.getSizeEntityData, payload);
    yield put(getSizeEntitySuccess(sizeEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getSizeEntityFail('Network error'));
      return;
    }
    yield put(getSizeEntityFail(err.response.data.message));
  }
}

function* addSizeEntity({ payload }: ReturnType<typeof createSizeEntityRequest>) {
  try {
    const sizeEntityData = yield call(SizesDataService.addSizeEntityData, payload);
    yield put(createSizeEntitySuccess(sizeEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createSizeEntityFail('Network error'));
      return;
    }
    yield put(createSizeEntityFail(err.response.data.message));
  }
}

function* updateSizeEntity({ payload }: ReturnType<typeof updateSizeEntityRequest>) {
  try {
    yield call(SizesDataService.updateSizeEntityData, payload);
    yield put(updateSizeEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateSizeEntityFail('Network error'));
      return;
    }
    yield put(updateSizeEntityFail(err.response.data.message));
  }
}

function* deleteSizeEntity({ payload }: ReturnType<typeof deleteSizeEntityRequest>) {
  try {
    yield call(SizesDataService.deleteSizeEntityData, payload);
    yield put(deleteSizeEntitySuccess());
    yield put(clearSizesDataState());
    yield put(getSizesRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteSizeEntityFail('Network error'));
      return;
    }
    yield put(deleteSizeEntityFail(err.response.data.message));
  }
}

const sizesDataSaga = all([
  takeLatest(GET_SIZES_REQUEST, getSizes),
  takeLatest(GET_SIZE_ENTITY_REQUEST, getSizeEntity),
  takeLatest(UPDATE_SIZE_ENTITY_REQUEST, updateSizeEntity),
  takeLatest(CREATE_SIZE_ENTITY_REQUEST, addSizeEntity),
  takeLatest(DELETE_SIZE_ENTITY_REQUEST, deleteSizeEntity),
]);

export default sizesDataSaga;
