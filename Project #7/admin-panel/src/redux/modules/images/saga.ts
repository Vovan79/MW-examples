import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_BY_USERID_REQUEST,
  GET_IMAGE_ENTITY_REQUEST,
  UPDATE_IMAGE_ENTITY_REQUEST,
  CREATE_IMAGE_ENTITY_REQUEST,
  DELETE_IMAGE_ENTITY_REQUEST,
} from './types';
import {
  getImagesRequest,
  getImagesSuccess,
  getImagesFail,
  getImagesByUserIdRequest,
  getImagesByUserIdSuccess,
  getImagesByUserIdFail,
  getImageEntityRequest,
  getImageEntitySuccess,
  getImageEntityFail,
  updateImageEntityRequest,
  updateImageEntitySuccess,
  updateImageEntityFail,
  createImageEntityRequest,
  createImageEntitySuccess,
  createImageEntityFail,
  deleteImageEntityRequest,
  deleteImageEntitySuccess,
  deleteImageEntityFail,
  clearImagesDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { ImagesDataService } from '../../../services';

function* getImages() {
  try {
    const imagesData = yield call(ImagesDataService.getImagesData);
    yield put(getImagesSuccess(imagesData));
  } catch (err) {
    if (!err.response) {
      yield put(getImagesFail('Network error'));
      return;
    }
    yield put(getImagesFail(err.response.data.message));
  }
}

function* getImagesByUserId({ payload }: ReturnType<typeof getImagesByUserIdRequest>) {
  try {
    const imagesData = yield call(ImagesDataService.getImagesByUserIdData, payload);
    yield put(getImagesByUserIdSuccess(imagesData));
  } catch (err) {
    if (!err.response) {
      yield put(getImagesByUserIdFail('Network error'));
      return;
    }
    yield put(getImagesByUserIdFail(err.response.data.message));
  }
}

function* getImageEntity({ payload }: ReturnType<typeof getImageEntityRequest>) {
  try {
    const imageEntityData = yield call(ImagesDataService.getImageEntityData, payload);
    yield put(getImageEntitySuccess(imageEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getImageEntityFail('Network error'));
      return;
    }
    yield put(getImageEntityFail(err.response.data.message));
  }
}

function* addImageEntity({ payload }: ReturnType<typeof createImageEntityRequest>) {
  const {
    link,
  } = payload;
  const formData = new FormData();

  formData.append('link', link);

  try {
    const imageEntityData = yield call(ImagesDataService.addImageEntityData, formData);
    yield put(createImageEntitySuccess(imageEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createImageEntityFail('Network error'));
      return;
    }
    yield put(createImageEntityFail(err.response.data.message));
  }
}

function* updateImageEntity({ payload }: ReturnType<typeof updateImageEntityRequest>) {
  try {
    yield call(ImagesDataService.updateImageEntityData, payload);
    yield put(updateImageEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateImageEntityFail('Network error'));
      return;
    }
    yield put(updateImageEntityFail(err.response.data.message));
  }
}

function* deleteImageEntity({ payload }: ReturnType<typeof deleteImageEntityRequest>) {
  try {
    yield call(ImagesDataService.deleteImageEntityData, payload);
    yield put(deleteImageEntitySuccess());
    yield put(clearImagesDataState());
    yield put(getImagesRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteImageEntityFail('Network error'));
      return;
    }
    yield put(deleteImageEntityFail(err.response.data.message));
  }
}

const imagesDataSaga = all([
  takeLatest(GET_IMAGES_REQUEST, getImages),
  takeLatest(GET_IMAGES_BY_USERID_REQUEST, getImagesByUserId),
  takeLatest(GET_IMAGE_ENTITY_REQUEST, getImageEntity),
  takeLatest(UPDATE_IMAGE_ENTITY_REQUEST, updateImageEntity),
  takeLatest(CREATE_IMAGE_ENTITY_REQUEST, addImageEntity),
  takeLatest(DELETE_IMAGE_ENTITY_REQUEST, deleteImageEntity),
]);

export default imagesDataSaga;
