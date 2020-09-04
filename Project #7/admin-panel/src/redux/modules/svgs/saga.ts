import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_SVGS_REQUEST,
  GET_SVGS_BY_USERID_REQUEST,
  GET_SVG_ENTITY_REQUEST,
  UPDATE_SVG_ENTITY_REQUEST,
  CREATE_SVG_ENTITY_REQUEST,
  DELETE_SVG_ENTITY_REQUEST,
} from './types';
import {
  getSVGsRequest,
  getSVGsSuccess,
  getSVGsFail,
  getSVGsByUserIdRequest,
  getSVGsByUserIdSuccess,
  getSVGsByUserIdFail,
  getSVGEntityRequest,
  getSVGEntitySuccess,
  getSVGEntityFail,
  updateSVGEntityRequest,
  updateSVGEntitySuccess,
  updateSVGEntityFail,
  createSVGEntityRequest,
  createSVGEntitySuccess,
  createSVGEntityFail,
  deleteSVGEntityRequest,
  deleteSVGEntitySuccess,
  deleteSVGEntityFail,
  clearSVGsDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { SVGsDataService } from '../../../services';

function* getSVGs({ payload }: ReturnType<typeof getSVGsRequest>) {
  try {
    yield put(clearSVGsDataState());
    const svgsData = yield call(SVGsDataService.getSVGsData, payload);
    yield put(getSVGsSuccess(svgsData));
  } catch (err) {
    if (!err.response) {
      yield put(getSVGsFail('Network error'));
      return;
    }
    yield put(getSVGsFail(err.response.data.message));
  }
}

function* getSVGsByUserId({ payload }: ReturnType<typeof getSVGsByUserIdRequest>) {
  try {
    const svgsData = yield call(SVGsDataService.getSVGsByUserIdData, payload);
    yield put(getSVGsByUserIdSuccess(svgsData));
  } catch (err) {
    if (!err.response) {
      yield put(getSVGsByUserIdFail('Network error'));
      return;
    }
    yield put(getSVGsByUserIdFail(err.response.data.message));
  }
}

function* getSVGEntity({ payload }: ReturnType<typeof getSVGEntityRequest>) {
  try {
    const svgEntityData = yield call(SVGsDataService.getSVGEntityData, payload);
    yield put(getSVGEntitySuccess(svgEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getSVGEntityFail('Network error'));
      return;
    }
    yield put(getSVGEntityFail(err.response.data.message));
  }
}

function* addSVGEntity({ payload }: ReturnType<typeof createSVGEntityRequest>) {
  const {
    name,
    svgCategoryId,
    cost,
    svg,
    order,
  } = payload;
  const formData = new FormData();

  formData.append('name', name);
  formData.append('svgCategoryId', svgCategoryId);
  formData.append('cost', cost);
  formData.append('order', order);
  formData.append('svg', svg);
  formData.append('isPublic', 'public');

  try {
    const svgEntityData = yield call(SVGsDataService.addSVGEntityData, formData);
    yield put(createSVGEntitySuccess(svgEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: payload.type,
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createSVGEntityFail('Network error'));
      return;
    }
    yield put(createSVGEntityFail(err.response.data.message));
  }
}

function* updateSVGEntity({ payload }: ReturnType<typeof updateSVGEntityRequest>) {
  try {
    // exclude fields "type" and "link" from request payload
    const { type, link, ...filteredData } = payload;
    yield call(SVGsDataService.updateSVGEntityData, filteredData);
    yield put(updateSVGEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: payload.type,
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateSVGEntityFail('Network error'));
      return;
    }
    yield put(updateSVGEntityFail(err.response.data.message));
  }
}

function* deleteSVGEntity({ payload }: ReturnType<typeof deleteSVGEntityRequest>) {
  try {
    yield call(SVGsDataService.deleteSVGEntityData, payload.id);
    yield put(deleteSVGEntitySuccess());
    yield put(clearSVGsDataState());
    yield put(getSVGsRequest(payload.type.slice(0, -5)));
  } catch (err) {
    if (!err.response) {
      yield put(deleteSVGEntityFail('Network error'));
      return;
    }
    yield put(deleteSVGEntityFail(err.response.data.message));
  }
}

const svgsDataSaga = all([
  takeLatest(GET_SVGS_REQUEST, getSVGs),
  takeLatest(GET_SVGS_BY_USERID_REQUEST, getSVGsByUserId),
  takeLatest(GET_SVG_ENTITY_REQUEST, getSVGEntity),
  takeLatest(UPDATE_SVG_ENTITY_REQUEST, updateSVGEntity),
  takeLatest(CREATE_SVG_ENTITY_REQUEST, addSVGEntity),
  takeLatest(DELETE_SVG_ENTITY_REQUEST, deleteSVGEntity),
  // takeLatest(CONNECT_SVGS, connectSVGToDocument),
]);

export default svgsDataSaga;
