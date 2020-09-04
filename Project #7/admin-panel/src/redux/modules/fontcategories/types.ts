export enum RequestName {
  GET_FONT_CATEGORIES = 'GET FONT CATEGORIES',
  GET_FONT_CATEGORY_ENTITY = 'GET FONT CATEGORY ENTITY',
  UPDATE_FONT_CATEGORY_ENTITY = 'UPDATE FONT CATEGORY ENTITY',
  CREATE_FONT_CATEGORY_ENTITY = 'CREATE FONT CATEGORY ENTITY',
  DELETE_FONT_CATEGORY_ENTITY = 'DELETE FONT CATEGORY ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type FontCategoryData = {
  id?: number,
  name: string,
  order: number,
};

export type FontCategoriesDataState = {
  fontcategories: FontCategoryData[],
  details: FontCategoryData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_FONT_CATEGORIES_REQUEST = 'GET FONT CATEGORIES REQUEST';
export const GET_FONT_CATEGORIES_SUCCESS = 'GET FONT CATEGORIES SUCCESS';
export const GET_FONT_CATEGORIES_FAIL = 'GET FONT CATEGORIES FAIL';
export const GET_FONT_CATEGORY_ENTITY_REQUEST = 'GET FONT CATEGORY ENTITY REQUEST';
export const GET_FONT_CATEGORY_ENTITY_SUCCESS = 'GET FONT CATEGORY ENTITY SUCCESS';
export const GET_FONT_CATEGORY_ENTITY_FAIL = 'GET FONT CATEGORY ENTITY FAIL';
export const UPDATE_FONT_CATEGORY_ENTITY_REQUEST = 'UPDATE FONT CATEGORY ENTITY REQUEST';
export const UPDATE_FONT_CATEGORY_ENTITY_SUCCESS = 'UPDATE FONT CATEGORY ENTITY SUCCESS';
export const UPDATE_FONT_CATEGORY_ENTITY_FAIL = 'UPDATE FONT CATEGORY ENTITY FAIL';
export const CREATE_FONT_CATEGORY_ENTITY_REQUEST = 'CREATE FONT CATEGORY ENTITY REQUEST';
export const CREATE_FONT_CATEGORY_ENTITY_SUCCESS = 'CREATE FONT CATEGORY ENTITY SUCCESS';
export const CREATE_FONT_CATEGORY_ENTITY_FAIL = 'CREATE FONT CATEGORY ENTITY FAIL';
export const DELETE_FONT_CATEGORY_ENTITY_REQUEST = 'DELETE FONT CATEGORY ENTITY REQUEST';
export const DELETE_FONT_CATEGORY_ENTITY_SUCCESS = 'DELETE FONT CATEGORY ENTITY SUCCESS';
export const DELETE_FONT_CATEGORY_ENTITY_FAIL = 'DELETE FONT CATEGORY ENTITY FAIL';
export const CLEAR_FONT_CATEGORIES_DATA_STATE = 'CLEAR FONT CATEGORIES DATA STATE';
export const CLEAR_FONT_CATEGORY_ENTITY_STATE = 'CLEAR FONT CATEGORY ENTITY STATE';
