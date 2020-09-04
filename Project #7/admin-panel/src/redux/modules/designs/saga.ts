import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_DESIGNS_REQUEST,
  GET_DESIGNS_BY_USERID_REQUEST,
  GET_DESIGN_ENTITY_REQUEST,
  UPDATE_DESIGN_ENTITY_REQUEST,
  CREATE_DESIGN_ENTITY_REQUEST,
  DELETE_DESIGN_ENTITY_REQUEST,
} from './types';
import {
  getDesignsRequest,
  getDesignsSuccess,
  getDesignsFail,
  getDesignsByUserIdRequest,
  getDesignsByUserIdSuccess,
  getDesignsByUserIdFail,
  getDesignEntityRequest,
  getDesignEntitySuccess,
  getDesignEntityFail,
  updateDesignEntityRequest,
  updateDesignEntitySuccess,
  updateDesignEntityFail,
  createDesignEntityRequest,
  createDesignEntitySuccess,
  createDesignEntityFail,
  deleteDesignEntityRequest,
  deleteDesignEntitySuccess,
  deleteDesignEntityFail,
  clearDesignsDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { DesignsDataService } from '../../../services';

function* getDesigns() {
  try {
    const designsData = yield call(DesignsDataService.getDesignsData);
    yield put(getDesignsSuccess(designsData));
  } catch (err) {
    if (!err.response) {
      yield put(getDesignsFail('Network error'));
      return;
    }
    yield put(getDesignsFail(err.response.data.message));
  }
}

function* getDesignsByUserId({ payload }: ReturnType<typeof getDesignsByUserIdRequest>) {
  try {
    const designsData = yield call(DesignsDataService.getDesignsByUserIdData, payload);
    yield put(getDesignsByUserIdSuccess(designsData));
  } catch (err) {
    if (!err.response) {
      yield put(getDesignsByUserIdFail('Network error'));
      return;
    }
    yield put(getDesignsByUserIdFail(err.response.data.message));
  }
}

function* getDesignEntity({ payload }: ReturnType<typeof getDesignEntityRequest>) {
  try {
    const designEntityData = yield call(DesignsDataService.getDesignEntityData, payload);
    yield put(getDesignEntitySuccess(designEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getDesignEntityFail('Network error'));
      return;
    }
    yield put(getDesignEntityFail(err.response.data.message));
  }
}

function* addDesignEntity({ payload }: ReturnType<typeof createDesignEntityRequest>) {
  const {
    name,
    design,
    previewData,
  } = payload;
  const formData = new FormData();

  formData.append('name', name);
  formData.append('design', design);
  formData.append('previewData', previewData);

  try {
    const designEntityData = yield call(DesignsDataService.addDesignEntityData, formData);
    yield put(createDesignEntitySuccess(designEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createDesignEntityFail('Network error'));
      return;
    }
    yield put(createDesignEntityFail(err.response.data.message));
  }
}

function* updateDesignEntity({ payload }: ReturnType<typeof updateDesignEntityRequest>) {
  try {
    yield call(DesignsDataService.updateDesignEntityData, payload);
    yield put(updateDesignEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateDesignEntityFail('Network error'));
      return;
    }
    yield put(updateDesignEntityFail(err.response.data.message));
  }
}

function* deleteDesignEntity({ payload }: ReturnType<typeof deleteDesignEntityRequest>) {
  try {
    yield call(DesignsDataService.deleteDesignEntityData, payload);
    yield put(deleteDesignEntitySuccess());
    yield put(clearDesignsDataState());
    yield put(getDesignsRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteDesignEntityFail('Network error'));
      return;
    }
    yield put(deleteDesignEntityFail(err.response.data.message));
  }
}

const designsDataSaga = all([
  takeLatest(GET_DESIGNS_REQUEST, getDesigns),
  takeLatest(GET_DESIGNS_BY_USERID_REQUEST, getDesignsByUserId),
  takeLatest(GET_DESIGN_ENTITY_REQUEST, getDesignEntity),
  takeLatest(UPDATE_DESIGN_ENTITY_REQUEST, updateDesignEntity),
  takeLatest(CREATE_DESIGN_ENTITY_REQUEST, addDesignEntity),
  takeLatest(DELETE_DESIGN_ENTITY_REQUEST, deleteDesignEntity),
]);

export default designsDataSaga;
