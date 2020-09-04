import {
  FontData,
  GET_FONTS_REQUEST,
  GET_FONTS_SUCCESS,
  GET_FONTS_FAIL,
  GET_FONTS_BY_USERID_REQUEST,
  GET_FONTS_BY_USERID_SUCCESS,
  GET_FONTS_BY_USERID_FAIL,
  GET_FONT_ENTITY_REQUEST,
  GET_FONT_ENTITY_SUCCESS,
  GET_FONT_ENTITY_FAIL,
  UPDATE_FONT_ENTITY_REQUEST,
  UPDATE_FONT_ENTITY_SUCCESS,
  UPDATE_FONT_ENTITY_FAIL,
  CREATE_FONT_ENTITY_REQUEST,
  CREATE_FONT_ENTITY_SUCCESS,
  CREATE_FONT_ENTITY_FAIL,
  DELETE_FONT_ENTITY_REQUEST,
  DELETE_FONT_ENTITY_SUCCESS,
  DELETE_FONT_ENTITY_FAIL,
  CLEAR_FONTS_DATA_STATE,
  CLEAR_FONT_ENTITY_STATE,
  CONNECT_FONTS,
} from './types';

// FONTS
export const getFontsRequest = () => ({
  type: GET_FONTS_REQUEST,
}) as const;

export const getFontsSuccess = (payload: FontData[]) => ({
  type: GET_FONTS_SUCCESS,
  payload,
}) as const;

export const getFontsFail = (payload: string) => ({
  type: GET_FONTS_FAIL,
  payload,
}) as const;

export const getFontsByUserIdRequest = (payload: number) => ({
  type: GET_FONTS_BY_USERID_REQUEST,
  payload,
}) as const;

export const getFontsByUserIdSuccess = (payload: FontData[]) => ({
  type: GET_FONTS_BY_USERID_SUCCESS,
  payload,
}) as const;

export const getFontsByUserIdFail = (payload: string) => ({
  type: GET_FONTS_BY_USERID_FAIL,
  payload,
}) as const;

export const getFontEntityRequest = (payload: number) => ({
  type: GET_FONT_ENTITY_REQUEST,
  payload,
}) as const;

export const getFontEntitySuccess = (payload: FontData) => ({
  type: GET_FONT_ENTITY_SUCCESS,
  payload,
}) as const;

export const getFontEntityFail = (payload: string) => ({
  type: GET_FONT_ENTITY_FAIL,
  payload,
}) as const;

export const updateFontEntityRequest = (payload: FontData) => ({
  type: UPDATE_FONT_ENTITY_REQUEST,
  payload,
}) as const;

export const updateFontEntitySuccess = () => ({
  type: UPDATE_FONT_ENTITY_SUCCESS,
}) as const;

export const updateFontEntityFail = (payload: string) => ({
  type: UPDATE_FONT_ENTITY_FAIL,
  payload,
}) as const;

export const createFontEntityRequest = (payload: FontData) => ({
  type: CREATE_FONT_ENTITY_REQUEST,
  payload,
}) as const;

export const createFontEntitySuccess = (payload: FontData) => ({
  type: CREATE_FONT_ENTITY_SUCCESS,
  payload,
}) as const;

export const createFontEntityFail = (payload: string) => ({
  type: CREATE_FONT_ENTITY_FAIL,
  payload,
}) as const;

export const deleteFontEntityRequest = (payload: number) => ({
  type: DELETE_FONT_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteFontEntitySuccess = () => ({
  type: DELETE_FONT_ENTITY_SUCCESS,
}) as const;

export const deleteFontEntityFail = (payload: string) => ({
  type: DELETE_FONT_ENTITY_FAIL,
  payload,
}) as const;

export const clearFontsDataState = () => ({
  type: CLEAR_FONTS_DATA_STATE,
}) as const;

export const clearFontEntityState = () => ({
  type: CLEAR_FONT_ENTITY_STATE,
}) as const;

export const connectFonts = (payload: Array<FontData>) => ({
  type: CONNECT_FONTS,
  payload,
}) as const;

export type fontsActionsTypes = ReturnType<typeof getFontsRequest>
| ReturnType<typeof getFontsSuccess>
| ReturnType<typeof getFontsFail>
| ReturnType<typeof getFontsByUserIdRequest>
| ReturnType<typeof getFontsByUserIdSuccess>
| ReturnType<typeof getFontsByUserIdFail>
| ReturnType<typeof getFontEntityRequest>
| ReturnType<typeof getFontEntitySuccess>
| ReturnType<typeof getFontEntityFail>
| ReturnType<typeof updateFontEntityRequest>
| ReturnType<typeof updateFontEntitySuccess>
| ReturnType<typeof updateFontEntityFail>
| ReturnType<typeof createFontEntityRequest>
| ReturnType<typeof createFontEntitySuccess>
| ReturnType<typeof createFontEntityFail>
| ReturnType<typeof deleteFontEntityRequest>
| ReturnType<typeof deleteFontEntitySuccess>
| ReturnType<typeof deleteFontEntityFail>
| ReturnType<typeof clearFontsDataState>
| ReturnType<typeof clearFontEntityState>
| ReturnType<typeof connectFonts>;
