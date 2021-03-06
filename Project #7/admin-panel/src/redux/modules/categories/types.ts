export enum RequestName {
  GET_CATEGORIES = 'GET CATEGORIES',
  GET_CATEGORY_ENTITY = 'GET CATEGORY ENTITY',
  UPDATE_CATEGORY_ENTITY = 'UPDATE CATEGORY ENTITY',
  CREATE_CATEGORY_ENTITY = 'CREATE CATEGORY ENTITY',
  DELETE_CATEGORY_ENTITY = 'DELETE CATEGORY ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type CategoryData = {
  id?: number,
  name: string,
  order: number,
};

export type CategoriesDataState = {
  categories: CategoryData[],
  details: CategoryData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_CATEGORIES_REQUEST = 'GET CATEGORIES REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET CATEGORIES SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET CATEGORIES FAIL';
export const GET_CATEGORY_ENTITY_REQUEST = 'GET CATEGORY ENTITY REQUEST';
export const GET_CATEGORY_ENTITY_SUCCESS = 'GET CATEGORY ENTITY SUCCESS';
export const GET_CATEGORY_ENTITY_FAIL = 'GET CATEGORY ENTITY FAIL';
export const UPDATE_CATEGORY_ENTITY_REQUEST = 'UPDATE CATEGORY ENTITY REQUEST';
export const UPDATE_CATEGORY_ENTITY_SUCCESS = 'UPDATE CATEGORY ENTITY SUCCESS';
export const UPDATE_CATEGORY_ENTITY_FAIL = 'UPDATE CATEGORY ENTITY FAIL';
export const CREATE_CATEGORY_ENTITY_REQUEST = 'CREATE CATEGORY ENTITY REQUEST';
export const CREATE_CATEGORY_ENTITY_SUCCESS = 'CREATE CATEGORY ENTITY SUCCESS';
export const CREATE_CATEGORY_ENTITY_FAIL = 'CREATE CATEGORY ENTITY FAIL';
export const DELETE_CATEGORY_ENTITY_REQUEST = 'DELETE CATEGORY ENTITY REQUEST';
export const DELETE_CATEGORY_ENTITY_SUCCESS = 'DELETE CATEGORY ENTITY SUCCESS';
export const DELETE_CATEGORY_ENTITY_FAIL = 'DELETE CATEGORY ENTITY FAIL';
export const CLEAR_CATEGORIES_DATA_STATE = 'CLEAR CATEGORIES DATA STATE';
export const CLEAR_CATEGORY_ENTITY_STATE = 'CLEAR CATEGORY ENTITY STATE';
