import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_FONTS_REQUEST,
  GET_FONTS_BY_USERID_REQUEST,
  GET_FONT_ENTITY_REQUEST,
  UPDATE_FONT_ENTITY_REQUEST,
  CREATE_FONT_ENTITY_REQUEST,
  DELETE_FONT_ENTITY_REQUEST,
  CONNECT_FONTS,
} from './types';
import {
  connectFonts,
  getFontsRequest,
  getFontsSuccess,
  getFontsFail,
  getFontsByUserIdRequest,
  getFontsByUserIdSuccess,
  getFontsByUserIdFail,
  getFontEntityRequest,
  getFontEntitySuccess,
  getFontEntityFail,
  updateFontEntityRequest,
  updateFontEntitySuccess,
  updateFontEntityFail,
  createFontEntityRequest,
  createFontEntitySuccess,
  createFontEntityFail,
  deleteFontEntityRequest,
  deleteFontEntitySuccess,
  deleteFontEntityFail,
  clearFontsDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { FontsDataService, FontFaceService } from '../../../services';

function* getFonts() {
  try {
    const fontsData = yield call(FontsDataService.getFontsData);
    yield put(getFontsSuccess(fontsData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontsFail('Network error'));
      return;
    }
    yield put(getFontsFail(err.response.data.message));
  }
}

function* getFontsByUserId({ payload }: ReturnType<typeof getFontsByUserIdRequest>) {
  try {
    const fontsData = yield call(FontsDataService.getFontsByUserIdData, payload);
    yield put(getFontsByUserIdSuccess(fontsData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontsByUserIdFail('Network error'));
      return;
    }
    yield put(getFontsByUserIdFail(err.response.data.message));
  }
}

function* getFontEntity({ payload }: ReturnType<typeof getFontEntityRequest>) {
  try {
    const fontEntityData = yield call(FontsDataService.getFontEntityData, payload);
    yield put(getFontEntitySuccess(fontEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getFontEntityFail('Network error'));
      return;
    }
    yield put(getFontEntityFail(err.response.data.message));
  }
}

function* addFontEntity({ payload }: ReturnType<typeof createFontEntityRequest>) {
  const {
    name,
    fontCategoryId,
    font,
    // isPublic,
  } = payload;
  const formData = new FormData();

  formData.append('name', name);
  formData.append('fontCategoryId', fontCategoryId);
  formData.append('font', font);
  formData.append('isPublic', 'public');

  try {
    const fontEntityData = yield call(FontsDataService.addFontEntityData, formData);
    yield put(createFontEntitySuccess(fontEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createFontEntityFail('Network error'));
      return;
    }
    yield put(createFontEntityFail(err.response.data.message));
  }
}

function* updateFontEntity({ payload }: ReturnType<typeof updateFontEntityRequest>) {
  try {
    yield call(FontsDataService.updateFontEntityData, payload);
    yield put(updateFontEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updateFontEntityFail('Network error'));
      return;
    }
    yield put(updateFontEntityFail(err.response.data.message));
  }
}

function* deleteFontEntity({ payload }: ReturnType<typeof deleteFontEntityRequest>) {
  try {
    yield call(FontsDataService.deleteFontEntityData, payload);
    yield put(deleteFontEntitySuccess());
    yield put(clearFontsDataState());
    yield put(getFontsRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deleteFontEntityFail('Network error'));
      return;
    }
    yield put(deleteFontEntityFail(err.response.data.message));
  }
}

function* connectFontToDocument({ payload }: ReturnType<typeof connectFonts>) {
  yield all(
    payload.map(font => call(FontFaceService.addFont, { fontFamilyName: font.name, url: font.link })),
  );
}

const fontsDataSaga = all([
  takeLatest(GET_FONTS_REQUEST, getFonts),
  takeLatest(GET_FONTS_BY_USERID_REQUEST, getFontsByUserId),
  takeLatest(GET_FONT_ENTITY_REQUEST, getFontEntity),
  takeLatest(UPDATE_FONT_ENTITY_REQUEST, updateFontEntity),
  takeLatest(CREATE_FONT_ENTITY_REQUEST, addFontEntity),
  takeLatest(DELETE_FONT_ENTITY_REQUEST, deleteFontEntity),
  takeLatest(CONNECT_FONTS, connectFontToDocument),
]);

export default fontsDataSaga;
