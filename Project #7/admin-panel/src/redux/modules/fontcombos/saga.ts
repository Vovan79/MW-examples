import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_FONT_COMBOS_REQUEST,
  GET_FONT_COMBO_ENTITY_REQUEST,
  UPDATE_FONT_COMBO_ENTITY_REQUEST,
  CREATE_FONT_COMBO_ENTITY_REQUEST,
  DELETE_FONT_COMBO_ENTITY_REQUEST,
} from './types';
import {
  getFontCombosRequest,
  getFontCombosSuccess,
  getFontCombosFail,
  getFontComboEntityRequest,
  getFontComboEntitySuccess,
  getFontComboEntityFail,
  updateFontComboEntityRequest,
  updateFontComboEntitySuccess,
  updateFontComboEntityFail,
  createFontComboEntityRequest,
  createFontComboEntitySuccess,
  createFontComboEntityFail,
  deleteFontComboEntityRequest,
  deleteFontComboEntitySuccess,
  deleteFontComboEntityFail,
  clearFontCombosDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { FontCombosDataService } from '../../../services';

function* getFontCombos() {
  try {
    const fontCombosData = yield call(FontCombosDataService.getFontCombosData);
    yield put(getFontCombosSuccess(fontCombosData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontCombosFail('Network error'));
      return;
    }
    yield put(getFontCombosFail(err.response.data.message));
  }
}

function* getFontComboEntity({ payload }: ReturnType<typeof getFontComboEntityRequest>) {
  try {
    const fontComboEntityData = yield call(FontCombosDataService.getFontComboEntityData, payload);
    yield put(getFontComboEntitySuccess(fontComboEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontComboEntityFail('Network error'));
      return;
    }
    yield put(getFontComboEntityFail(err.response.data.message));
  }
}

function* addFontComboEntity({ payload }: ReturnType<typeof createFontComboEntityRequest>) {
  try {
    const fontComboEntityData = yield call(FontCombosDataService.addFontComboEntityData, payload);
    yield put(createFontComboEntitySuccess(fontComboEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createFontComboEntityFail('Network error'));
      return;
    }
    yield put(createFontComboEntityFail(err.response.data.message));
  }
}

function* updateFontComboEntity({ payload }: ReturnType<typeof updateFontComboEntityRequest>) {
  try {
    yield call(FontCombosDataService.updateFontComboEntityData, payload);
    yield put(updateFontComboEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateFontComboEntityFail('Network error'));
      return;
    }
    yield put(updateFontComboEntityFail(err.response.data.message));
  }
}

function* deleteFontComboEntity({ payload }: ReturnType<typeof deleteFontComboEntityRequest>) {
  try {
    yield call(FontCombosDataService.deleteFontComboEntityData, payload);
    yield put(deleteFontComboEntitySuccess());
    yield put(clearFontCombosDataState());
    yield put(getFontCombosRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteFontComboEntityFail('Network error'));
      return;
    }
    yield put(deleteFontComboEntityFail(err.response.data.message));
  }
}

const fontCombosDataSaga = all([
  takeLatest(GET_FONT_COMBOS_REQUEST, getFontCombos),
  takeLatest(GET_FONT_COMBO_ENTITY_REQUEST, getFontComboEntity),
  takeLatest(UPDATE_FONT_COMBO_ENTITY_REQUEST, updateFontComboEntity),
  takeLatest(CREATE_FONT_COMBO_ENTITY_REQUEST, addFontComboEntity),
  takeLatest(DELETE_FONT_COMBO_ENTITY_REQUEST, deleteFontComboEntity),
]);

export default fontCombosDataSaga;
