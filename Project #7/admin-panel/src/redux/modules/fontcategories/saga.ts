import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_FONT_CATEGORIES_REQUEST,
  GET_FONT_CATEGORY_ENTITY_REQUEST,
  UPDATE_FONT_CATEGORY_ENTITY_REQUEST,
  CREATE_FONT_CATEGORY_ENTITY_REQUEST,
  DELETE_FONT_CATEGORY_ENTITY_REQUEST,
} from './types';
import {
  getFontCategoriesRequest,
  getFontCategoriesSuccess,
  getFontCategoriesFail,
  getFontCategoryEntityRequest,
  getFontCategoryEntitySuccess,
  getFontCategoryEntityFail,
  updateFontCategoryEntityRequest,
  updateFontCategoryEntitySuccess,
  updateFontCategoryEntityFail,
  createFontCategoryEntityRequest,
  createFontCategoryEntitySuccess,
  createFontCategoryEntityFail,
  deleteFontCategoryEntityRequest,
  deleteFontCategoryEntitySuccess,
  deleteFontCategoryEntityFail,
  clearFontCategoriesDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { FontCategoriesDataService } from '../../../services';

function* getFontCategories() {
  try {
    const fontCategoriesData = yield call(FontCategoriesDataService.getFontCategoriesData);
    yield put(getFontCategoriesSuccess(fontCategoriesData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontCategoriesFail('Network error'));
      return;
    }
    yield put(getFontCategoriesFail(err.response.data.message));
  }
}

function* getFontCategoryEntity({ payload }: ReturnType<typeof getFontCategoryEntityRequest>) {
  try {
    const fontCategoryEntityData = yield call(FontCategoriesDataService.getFontCategoryEntityData, payload);
    yield put(getFontCategoryEntitySuccess(fontCategoryEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontCategoryEntityFail('Network error'));
      return;
    }
    yield put(getFontCategoryEntityFail(err.response.data.message));
  }
}

function* addFontCategoryEntity({ payload }: ReturnType<typeof createFontCategoryEntityRequest>) {
  try {
    const fontCategoryEntityData = yield call(FontCategoriesDataService.addFontCategoryEntityData, payload);
    yield put(createFontCategoryEntitySuccess(fontCategoryEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createFontCategoryEntityFail('Network error'));
      return;
    }
    yield put(createFontCategoryEntityFail(err.response.data.message));
  }
}

function* updateFontCategoryEntity({ payload }: ReturnType<typeof updateFontCategoryEntityRequest>) {
  try {
    yield call(FontCategoriesDataService.updateFontCategoryEntityData, payload);
    yield put(updateFontCategoryEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateFontCategoryEntityFail('Network error'));
      return;
    }
    yield put(updateFontCategoryEntityFail(err.response.data.message));
  }
}

function* deleteFontCategoryEntity({ payload }: ReturnType<typeof deleteFontCategoryEntityRequest>) {
  try {
    yield call(FontCategoriesDataService.deleteFontCategoryEntityData, payload);
    yield put(deleteFontCategoryEntitySuccess());
    yield put(clearFontCategoriesDataState());
    yield put(getFontCategoriesRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteFontCategoryEntityFail('Network error'));
      return;
    }
    yield put(deleteFontCategoryEntityFail(err.response.data.message));
  }
}

const fontCategoriesDataSaga = all([
  takeLatest(GET_FONT_CATEGORIES_REQUEST, getFontCategories),
  takeLatest(GET_FONT_CATEGORY_ENTITY_REQUEST, getFontCategoryEntity),
  takeLatest(UPDATE_FONT_CATEGORY_ENTITY_REQUEST, updateFontCategoryEntity),
  takeLatest(CREATE_FONT_CATEGORY_ENTITY_REQUEST, addFontCategoryEntity),
  takeLatest(DELETE_FONT_CATEGORY_ENTITY_REQUEST, deleteFontCategoryEntity),
]);

export default fontCategoriesDataSaga;
