import {
  SVGCategoryData,
  GET_SVG_CATEGORIES_REQUEST,
  GET_SVG_CATEGORIES_SUCCESS,
  GET_SVG_CATEGORIES_FAIL,
  GET_SVG_CATEGORY_ENTITY_REQUEST,
  GET_SVG_CATEGORY_ENTITY_SUCCESS,
  GET_SVG_CATEGORY_ENTITY_FAIL,
  UPDATE_SVG_CATEGORY_ENTITY_REQUEST,
  UPDATE_SVG_CATEGORY_ENTITY_SUCCESS,
  UPDATE_SVG_CATEGORY_ENTITY_FAIL,
  CREATE_SVG_CATEGORY_ENTITY_REQUEST,
  CREATE_SVG_CATEGORY_ENTITY_SUCCESS,
  CREATE_SVG_CATEGORY_ENTITY_FAIL,
  DELETE_SVG_CATEGORY_ENTITY_REQUEST,
  DELETE_SVG_CATEGORY_ENTITY_SUCCESS,
  DELETE_SVG_CATEGORY_ENTITY_FAIL,
  CLEAR_SVG_CATEGORIES_DATA_STATE,
  CLEAR_SVG_CATEGORY_ENTITY_STATE,
} from './types';

// SVG CATEGORIES
export const getSVGCategoriesRequest = (payload: string) => ({
  type: GET_SVG_CATEGORIES_REQUEST,
  payload,
}) as const;

export const getSVGCategoriesSuccess = (payload: SVGCategoryData[]) => ({
  type: GET_SVG_CATEGORIES_SUCCESS,
  payload,
}) as const;

export const getSVGCategoriesFail = (payload: string) => ({
  type: GET_SVG_CATEGORIES_FAIL,
  payload,
}) as const;

export const getSVGCategoryEntityRequest = (payload: number) => ({
  type: GET_SVG_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const getSVGCategoryEntitySuccess = (payload: SVGCategoryData) => ({
  type: GET_SVG_CATEGORY_ENTITY_SUCCESS,
  payload,
}) as const;

export const getSVGCategoryEntityFail = (payload: string) => ({
  type: GET_SVG_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const updateSVGCategoryEntityRequest = (payload: SVGCategoryData) => ({
  type: UPDATE_SVG_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const updateSVGCategoryEntitySuccess = () => ({
  type: UPDATE_SVG_CATEGORY_ENTITY_SUCCESS,
}) as const;

export const updateSVGCategoryEntityFail = (payload: string) => ({
  type: UPDATE_SVG_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const createSVGCategoryEntityRequest = (payload: SVGCategoryData) => ({
  type: CREATE_SVG_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const createSVGCategoryEntitySuccess = (payload: SVGCategoryData) => ({
  type: CREATE_SVG_CATEGORY_ENTITY_SUCCESS,
  payload,
}) as const;

export const createSVGCategoryEntityFail = (payload: string) => ({
  type: CREATE_SVG_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const deleteSVGCategoryEntityRequest = (payload: { id: number, type: string }) => ({
  type: DELETE_SVG_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteSVGCategoryEntitySuccess = () => ({
  type: DELETE_SVG_CATEGORY_ENTITY_SUCCESS,
}) as const;

export const deleteSVGCategoryEntityFail = (payload: string) => ({
  type: DELETE_SVG_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const clearSVGCategoriesDataState = () => ({
  type: CLEAR_SVG_CATEGORIES_DATA_STATE,
}) as const;

export const clearSVGCategoryEntityState = () => ({
  type: CLEAR_SVG_CATEGORY_ENTITY_STATE,
}) as const;

export type SVGCategoriesActionsTypes = ReturnType<typeof getSVGCategoriesRequest>
| ReturnType<typeof getSVGCategoriesSuccess>
| ReturnType<typeof getSVGCategoriesFail>
| ReturnType<typeof getSVGCategoryEntityRequest>
| ReturnType<typeof getSVGCategoryEntitySuccess>
| ReturnType<typeof getSVGCategoryEntityFail>
| ReturnType<typeof updateSVGCategoryEntityRequest>
| ReturnType<typeof updateSVGCategoryEntitySuccess>
| ReturnType<typeof updateSVGCategoryEntityFail>
| ReturnType<typeof createSVGCategoryEntityRequest>
| ReturnType<typeof createSVGCategoryEntitySuccess>
| ReturnType<typeof createSVGCategoryEntityFail>
| ReturnType<typeof deleteSVGCategoryEntityRequest>
| ReturnType<typeof deleteSVGCategoryEntitySuccess>
| ReturnType<typeof deleteSVGCategoryEntityFail>
| ReturnType<typeof clearSVGCategoriesDataState>
| ReturnType<typeof clearSVGCategoryEntityState>;
