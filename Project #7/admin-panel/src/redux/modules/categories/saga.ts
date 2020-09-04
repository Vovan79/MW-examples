import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORY_ENTITY_REQUEST,
  UPDATE_CATEGORY_ENTITY_REQUEST,
  CREATE_CATEGORY_ENTITY_REQUEST,
  DELETE_CATEGORY_ENTITY_REQUEST,
} from './types';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFail,
  getCategoryEntityRequest,
  getCategoryEntitySuccess,
  getCategoryEntityFail,
  updateCategoryEntityRequest,
  updateCategoryEntitySuccess,
  updateCategoryEntityFail,
  createCategoryEntityRequest,
  createCategoryEntitySuccess,
  createCategoryEntityFail,
  deleteCategoryEntityRequest,
  deleteCategoryEntitySuccess,
  deleteCategoryEntityFail,
  clearCategoriesDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { CategoriesDataService } from '../../../services';

function* getCategories() {
  try {
    const categoriesData = yield call(CategoriesDataService.getCategoriesData);
    yield put(getCategoriesSuccess(categoriesData));
  } catch (err) {
    if (!err.response) {
      yield put(getCategoriesFail('Network error'));
      return;
    }
    yield put(getCategoriesFail(err.response.data.message));
  }
}

function* getCategoryEntity({ payload }: ReturnType<typeof getCategoryEntityRequest>) {
  try {
    const categoryEntityData = yield call(CategoriesDataService.getCategoryEntityData, payload);
    yield put(getCategoryEntitySuccess(categoryEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getCategoryEntityFail('Network error'));
      return;
    }
    yield put(getCategoryEntityFail(err.response.data.message));
  }
}

function* addCategoryEntity({ payload }: ReturnType<typeof createCategoryEntityRequest>) {
  try {
    const categoryEntityData = yield call(CategoriesDataService.addCategoryEntityData, payload);
    yield put(createCategoryEntitySuccess(categoryEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createCategoryEntityFail('Network error'));
      return;
    }
    yield put(createCategoryEntityFail(err.response.data.message));
  }
}

function* updateCategoryEntity({ payload }: ReturnType<typeof updateCategoryEntityRequest>) {
  try {
    yield call(CategoriesDataService.updateCategoryEntityData, payload);
    yield put(updateCategoryEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateCategoryEntityFail('Network error'));
      return;
    }
    yield put(updateCategoryEntityFail(err.response.data.message));
  }
}

function* deleteCategoryEntity({ payload }: ReturnType<typeof deleteCategoryEntityRequest>) {
  try {
    yield call(CategoriesDataService.deleteCategoryEntityData, payload);
    yield put(deleteCategoryEntitySuccess());
    yield put(clearCategoriesDataState());
    yield put(getCategoriesRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteCategoryEntityFail('Network error'));
      return;
    }
    yield put(deleteCategoryEntityFail(err.response.data.message));
  }
}

const categoriesDataSaga = all([
  takeLatest(GET_CATEGORIES_REQUEST, getCategories),
  takeLatest(GET_CATEGORY_ENTITY_REQUEST, getCategoryEntity),
  takeLatest(UPDATE_CATEGORY_ENTITY_REQUEST, updateCategoryEntity),
  takeLatest(CREATE_CATEGORY_ENTITY_REQUEST, addCategoryEntity),
  takeLatest(DELETE_CATEGORY_ENTITY_REQUEST, deleteCategoryEntity),
]);

export default categoriesDataSaga;
