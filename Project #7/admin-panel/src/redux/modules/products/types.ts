export enum RequestName {
  GET_PRODUCTS = 'GET PRODUCTS',
  GET_PRODUCT_ENTITY = 'GET PRODUCT ENTITY',
  UPDATE_PRODUCT_ENTITY = 'UPDATE PRODUCT ENTITY',
  CREATE_PRODUCT_ENTITY = 'CREATE PRODUCT ENTITY',
  DELETE_PRODUCT_ENTITY = 'DELETE PRODUCT ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type TemplateGroup = {
  id: number,
  name: string,
  status: string,
};

export type ProductData = {
  id?: number,
  name: string,
  categoryId: number,
  order: number,
  productSizes: {id: number}[],
  templateGroups: TemplateGroup[],
};

export type ProductsDataState = {
  products: ProductData[],
  details: ProductData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_PRODUCTS_REQUEST = 'GET PRODUCTS REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET PRODUCTS SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET PRODUCTS FAIL';
export const GET_PRODUCT_ENTITY_REQUEST = 'GET PRODUCT ENTITY REQUEST';
export const GET_PRODUCT_ENTITY_SUCCESS = 'GET PRODUCT ENTITY SUCCESS';
export const GET_PRODUCT_ENTITY_FAIL = 'GET PRODUCT ENTITY FAIL';
export const UPDATE_PRODUCT_ENTITY_REQUEST = 'UPDATE PRODUCT ENTITY REQUEST';
export const UPDATE_PRODUCT_ENTITY_SUCCESS = 'UPDATE PRODUCT ENTITY SUCCESS';
export const UPDATE_PRODUCT_ENTITY_FAIL = 'UPDATE PRODUCT ENTITY FAIL';
export const CREATE_PRODUCT_ENTITY_REQUEST = 'CREATE PRODUCT ENTITY REQUEST';
export const CREATE_PRODUCT_ENTITY_SUCCESS = 'CREATE PRODUCT ENTITY SUCCESS';
export const CREATE_PRODUCT_ENTITY_FAIL = 'CREATE PRODUCT ENTITY FAIL';
export const DELETE_PRODUCT_ENTITY_REQUEST = 'DELETE PRODUCT ENTITY REQUEST';
export const DELETE_PRODUCT_ENTITY_SUCCESS = 'DELETE PRODUCT ENTITY SUCCESS';
export const DELETE_PRODUCT_ENTITY_FAIL = 'DELETE PRODUCT ENTITY FAIL';
export const CLEAR_PRODUCTS_DATA_STATE = 'CLEAR PRODUCTS DATA STATE';
export const CLEAR_PRODUCT_ENTITY_STATE = 'CLEAR PRODUCT ENTITY STATE';
