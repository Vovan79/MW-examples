import {
  CategoryData,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORY_ENTITY_REQUEST,
  GET_CATEGORY_ENTITY_SUCCESS,
  GET_CATEGORY_ENTITY_FAIL,
  UPDATE_CATEGORY_ENTITY_REQUEST,
  UPDATE_CATEGORY_ENTITY_SUCCESS,
  UPDATE_CATEGORY_ENTITY_FAIL,
  CREATE_CATEGORY_ENTITY_REQUEST,
  CREATE_CATEGORY_ENTITY_SUCCESS,
  CREATE_CATEGORY_ENTITY_FAIL,
  DELETE_CATEGORY_ENTITY_REQUEST,
  DELETE_CATEGORY_ENTITY_SUCCESS,
  DELETE_CATEGORY_ENTITY_FAIL,
  CLEAR_CATEGORIES_DATA_STATE,
  CLEAR_CATEGORY_ENTITY_STATE,
} from './types';

// SIZES
export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
}) as const;

export const getCategoriesSuccess = (payload: CategoryData[]) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
}) as const;

export const getCategoriesFail = (payload: string) => ({
  type: GET_CATEGORIES_FAIL,
  payload,
}) as const;

export const getCategoryEntityRequest = (payload: number) => ({
  type: GET_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const getCategoryEntitySuccess = (payload: CategoryData) => ({
  type: GET_CATEGORY_ENTITY_SUCCESS,
  payload,
}) as const;

export const getCategoryEntityFail = (payload: string) => ({
  type: GET_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const updateCategoryEntityRequest = (payload: CategoryData) => ({
  type: UPDATE_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const updateCategoryEntitySuccess = () => ({
  type: UPDATE_CATEGORY_ENTITY_SUCCESS,
}) as const;

export const updateCategoryEntityFail = (payload: string) => ({
  type: UPDATE_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const createCategoryEntityRequest = (payload: CategoryData) => ({
  type: CREATE_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const createCategoryEntitySuccess = (payload: CategoryData) => ({
  type: CREATE_CATEGORY_ENTITY_SUCCESS,
  payload,
}) as const;

export const createCategoryEntityFail = (payload: string) => ({
  type: CREATE_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const deleteCategoryEntityRequest = (payload: number) => ({
  type: DELETE_CATEGORY_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteCategoryEntitySuccess = () => ({
  type: DELETE_CATEGORY_ENTITY_SUCCESS,
}) as const;

export const deleteCategoryEntityFail = (payload: string) => ({
  type: DELETE_CATEGORY_ENTITY_FAIL,
  payload,
}) as const;

export const clearCategoriesDataState = () => ({
  type: CLEAR_CATEGORIES_DATA_STATE,
}) as const;

export const clearCategoryEntityState = () => ({
  type: CLEAR_CATEGORY_ENTITY_STATE,
}) as const;

export type categoriesActionsTypes = ReturnType<typeof getCategoriesRequest>
| ReturnType<typeof getCategoriesSuccess>
| ReturnType<typeof getCategoriesFail>
| ReturnType<typeof getCategoryEntityRequest>
| ReturnType<typeof getCategoryEntitySuccess>
| ReturnType<typeof getCategoryEntityFail>
| ReturnType<typeof updateCategoryEntityRequest>
| ReturnType<typeof updateCategoryEntitySuccess>
| ReturnType<typeof updateCategoryEntityFail>
| ReturnType<typeof createCategoryEntityRequest>
| ReturnType<typeof createCategoryEntitySuccess>
| ReturnType<typeof createCategoryEntityFail>
| ReturnType<typeof deleteCategoryEntityRequest>
| ReturnType<typeof deleteCategoryEntitySuccess>
| ReturnType<typeof deleteCategoryEntityFail>
| ReturnType<typeof clearCategoriesDataState>
| ReturnType<typeof clearCategoryEntityState>;
