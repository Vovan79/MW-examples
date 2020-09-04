import {
  FontCategoryData,
  GET_FONT_CATEGORIES_REQUEST,
  GET_FONT_CATEGORIES_SUCCESS,
  GET_FONT_CATEGORIES_FAIL,
  GET_FONT_CATEGORY_ENTITY_REQUEST,
  GET_FONT_CATEGORY_ENTITY_SUCCESS,
  GET_FONT_CATEGORY_ENTITY_FAIL,
  UPDATE_FONT_CATEGORY_ENTITY_REQUEST,
  UPDATE_FONT_CATEGORY_ENTITY_SUCCESS,
  UPDATE_FONT_CATEGORY_ENTITY_FAIL,
  CREATE_FONT_CATEGORY_ENTITY_REQUEST,
  CREATE_FONT_CATEGORY_ENTITY_SUCCESS,
  CREATE_FONT_CATEGORY_ENTITY_FAIL,
  DELETE_FONT_CATEGORY_ENTITY_REQUEST,
  DELETE_FONT_CATEGORY_ENTITY_SUCCESS,
  DELETE_FONT_CATEGORY_ENTITY_FAIL,
  CLEAR_FONT_CATEGORIES_DATA_STATE,
  CLEAR_FONT_CATEGORY_ENTITY_STATE,
} from './types';

// CATEGORIES
export const getFontCategoriesRequest = () => ({
  type: GET_FONT_CATEGORIES_REQUEST,
}) as const;

export const getFontCategoriesSuccess = (payload: FontCategoryData[]) => ({
  type: GET_FONT_CATEGORIES_SUCCESS,
  payload,
}) as const;

export const getFontCategoriesFail = (payload: string) => ({
  type: GET_FONT_CATEGORIES_FAIL,
  payload,
}) as const;

export const getFontCategoryEntityRequest = (payload: number) => ({
  type: GET_FONT_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const getFontCategoryEntitySuccess = (payload: FontCategoryData) => ({
  type: GET_FONT_CATEGORY_ENTITY_SUCCESS,
  payload,
}) as const;

export const getFontCategoryEntityFail = (payload: string) => ({
  type: GET_FONT_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const updateFontCategoryEntityRequest = (payload: FontCategoryData) => ({
  type: UPDATE_FONT_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const updateFontCategoryEntitySuccess = () => ({
  type: UPDATE_FONT_CATEGORY_ENTITY_SUCCESS,
}) as const;

export const updateFontCategoryEntityFail = (payload: string) => ({
  type: UPDATE_FONT_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const createFontCategoryEntityRequest = (payload: FontCategoryData) => ({
  type: CREATE_FONT_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const createFontCategoryEntitySuccess = (payload: FontCategoryData) => ({
  type: CREATE_FONT_CATEGORY_ENTITY_SUCCESS,
  payload,
}) as const;

export const createFontCategoryEntityFail = (payload: string) => ({
  type: CREATE_FONT_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const deleteFontCategoryEntityRequest = (payload: number) => ({
  type: DELETE_FONT_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteFontCategoryEntitySuccess = () => ({
  type: DELETE_FONT_CATEGORY_ENTITY_SUCCESS,
}) as const;

export const deleteFontCategoryEntityFail = (payload: string) => ({
  type: DELETE_FONT_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const clearFontCategoriesDataState = () => ({
  type: CLEAR_FONT_CATEGORIES_DATA_STATE,
}) as const;

export const clearFontCategoryEntityState = () => ({
  type: CLEAR_FONT_CATEGORY_ENTITY_STATE,
}) as const;

export type fontCategoriesActionsTypes = ReturnType<typeof getFontCategoriesRequest>
| ReturnType<typeof getFontCategoriesSuccess>
| ReturnType<typeof getFontCategoriesFail>
| ReturnType<typeof getFontCategoryEntityRequest>
| ReturnType<typeof getFontCategoryEntitySuccess>
| ReturnType<typeof getFontCategoryEntityFail>
| ReturnType<typeof updateFontCategoryEntityRequest>
| ReturnType<typeof updateFontCategoryEntitySuccess>
| ReturnType<typeof updateFontCategoryEntityFail>
| ReturnType<typeof createFontCategoryEntityRequest>
| ReturnType<typeof createFontCategoryEntitySuccess>
| ReturnType<typeof createFontCategoryEntityFail>
| ReturnType<typeof deleteFontCategoryEntityRequest>
| ReturnType<typeof deleteFontCategoryEntitySuccess>
| ReturnType<typeof deleteFontCategoryEntityFail>
| ReturnType<typeof clearFontCategoriesDataState>
| ReturnType<typeof clearFontCategoryEntityState>;
