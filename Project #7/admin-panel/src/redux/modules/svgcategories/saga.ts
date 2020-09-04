import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_SVG_CATEGORIES_REQUEST,
  GET_SVG_CATEGORY_ENTITY_REQUEST,
  UPDATE_SVG_CATEGORY_ENTITY_REQUEST,
  CREATE_SVG_CATEGORY_ENTITY_REQUEST,
  DELETE_SVG_CATEGORY_ENTITY_REQUEST,
} from './types';
import {
  getSVGCategoriesRequest,
  getSVGCategoriesSuccess,
  getSVGCategoriesFail,
  getSVGCategoryEntityRequest,
  getSVGCategoryEntitySuccess,
  getSVGCategoryEntityFail,
  updateSVGCategoryEntityRequest,
  updateSVGCategoryEntitySuccess,
  updateSVGCategoryEntityFail,
  createSVGCategoryEntityRequest,
  createSVGCategoryEntitySuccess,
  createSVGCategoryEntityFail,
  deleteSVGCategoryEntityRequest,
  deleteSVGCategoryEntitySuccess,
  deleteSVGCategoryEntityFail,
  clearSVGCategoriesDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { SVGCategoriesDataService } from '../../../services';

function* getSVGCategories({ payload }: ReturnType<typeof getSVGCategoriesRequest>) {
  try {
    yield put(clearSVGCategoriesDataState());
    const svgCategoriesData = yield call(SVGCategoriesDataService.getSVGCategoriesData, payload);
    yield put(getSVGCategoriesSuccess(svgCategoriesData));
  } catch (err) {
    if (!err.response) {
      yield put(getSVGCategoriesFail('Network error'));
      return;
    }
    yield put(getSVGCategoriesFail(err.response.data.message));
  }
}

function* getSVGCategoryEntity({ payload }: ReturnType<typeof getSVGCategoryEntityRequest>) {
  try {
    const svgCategoryEntityData = yield call(SVGCategoriesDataService.getSVGCategoryEntityData, payload);
    yield put(getSVGCategoryEntitySuccess(svgCategoryEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getSVGCategoryEntityFail('Network error'));
      return;
    }
    yield put(getSVGCategoryEntityFail(err.response.data.message));
  }
}

function* addSVGCategoryEntity({ payload }: ReturnType<typeof createSVGCategoryEntityRequest>) {
  try {
    const svgCategoryEntityData = yield call(SVGCategoriesDataService.addSVGCategoryEntityData, payload);
    yield put(createSVGCategoryEntitySuccess(svgCategoryEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: payload.type,
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createSVGCategoryEntityFail('Network error'));
      return;
    }
    yield put(createSVGCategoryEntityFail(err.response.data.message));
  }
}

function* updateSVGCategoryEntity({ payload }: ReturnType<typeof updateSVGCategoryEntityRequest>) {
  try {
    yield call(SVGCategoriesDataService.updateSVGCategoryEntityData, payload);
    yield put(updateSVGCategoryEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: payload.type,
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateSVGCategoryEntityFail('Network error'));
      return;
    }
    yield put(updateSVGCategoryEntityFail(err.response.data.message));
  }
}

function* deleteSVGCategoryEntity({ payload }: ReturnType<typeof deleteSVGCategoryEntityRequest>) {
  try {
    yield call(SVGCategoriesDataService.deleteSVGCategoryEntityData, payload.id);
    yield put(deleteSVGCategoryEntitySuccess());
    yield put(clearSVGCategoriesDataState());
    yield put(getSVGCategoriesRequest(payload.type));
  } catch (err) {
    if (!err.response) {
      yield put(deleteSVGCategoryEntityFail('Network error'));
      return;
    }
    yield put(deleteSVGCategoryEntityFail(err.response.data.message));
  }
}

const svgCategoriesDataSaga = all([
  takeLatest(GET_SVG_CATEGORIES_REQUEST, getSVGCategories),
  takeLatest(GET_SVG_CATEGORY_ENTITY_REQUEST, getSVGCategoryEntity),
  takeLatest(UPDATE_SVG_CATEGORY_ENTITY_REQUEST, updateSVGCategoryEntity),
  takeLatest(CREATE_SVG_CATEGORY_ENTITY_REQUEST, addSVGCategoryEntity),
  takeLatest(DELETE_SVG_CATEGORY_ENTITY_REQUEST, deleteSVGCategoryEntity),
]);

export default svgCategoriesDataSaga;
