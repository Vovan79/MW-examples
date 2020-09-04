import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCT_ENTITY_REQUEST,
  UPDATE_PRODUCT_ENTITY_REQUEST,
  CREATE_PRODUCT_ENTITY_REQUEST,
  DELETE_PRODUCT_ENTITY_REQUEST,
} from './types';
import {
  getProductsRequest,
  getProductsSuccess,
  getProductsFail,
  getProductEntityRequest,
  getProductEntitySuccess,
  getProductEntityFail,
  updateProductEntityRequest,
  updateProductEntitySuccess,
  updateProductEntityFail,
  createProductEntityRequest,
  createProductEntitySuccess,
  createProductEntityFail,
  deleteProductEntityRequest,
  deleteProductEntitySuccess,
  deleteProductEntityFail,
  clearProductsDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { ProductsDataService } from '../../../services';

function* getProducts() {
  try {
    const productsData = yield call(ProductsDataService.getProductsData);
    yield put(getProductsSuccess(productsData));
  } catch (err) {
    if (!err.response) {
      yield put(getProductsFail('Network error'));
      return;
    }
    yield put(getProductsFail(err.response.data.message));
  }
}

function* getProductEntity({ payload }: ReturnType<typeof getProductEntityRequest>) {
  try {
    const productEntityData = yield call(ProductsDataService.getProductEntityData, payload);
    yield put(getProductEntitySuccess(productEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getProductEntityFail('Network error'));
      return;
    }
    yield put(getProductEntityFail(err.response.data.message));
  }
}

function* addProductEntity({ payload }: ReturnType<typeof createProductEntityRequest>) {
  try {
    const productEntityData = yield call(ProductsDataService.addProductEntityData, payload);
    yield put(createProductEntitySuccess(productEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createProductEntityFail('Network error'));
      return;
    }
    yield put(createProductEntityFail(err.response.data.message));
  }
}

function* updateProductEntity({ payload }: ReturnType<typeof updateProductEntityRequest>) {
  try {
    yield call(ProductsDataService.updateProductEntityData, payload);
    yield put(updateProductEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateProductEntityFail('Network error'));
      return;
    }
    yield put(updateProductEntityFail(err.response.data.message));
  }
}

function* deleteProductEntity({ payload }: ReturnType<typeof deleteProductEntityRequest>) {
  try {
    yield call(ProductsDataService.deleteProductEntityData, payload);
    yield put(deleteProductEntitySuccess());
    yield put(clearProductsDataState());
    yield put(getProductsRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteProductEntityFail('Network error'));
      return;
    }
    yield put(deleteProductEntityFail(err.response.data.message));
  }
}

const productDataSaga = all([
  takeLatest(GET_PRODUCTS_REQUEST, getProducts),
  takeLatest(GET_PRODUCT_ENTITY_REQUEST, getProductEntity),
  takeLatest(UPDATE_PRODUCT_ENTITY_REQUEST, updateProductEntity),
  takeLatest(CREATE_PRODUCT_ENTITY_REQUEST, addProductEntity),
  takeLatest(DELETE_PRODUCT_ENTITY_REQUEST, deleteProductEntity),
]);

export default productDataSaga;
