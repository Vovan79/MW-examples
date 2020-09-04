import {
  ProductData,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_ENTITY_REQUEST,
  GET_PRODUCT_ENTITY_SUCCESS,
  GET_PRODUCT_ENTITY_FAIL,
  UPDATE_PRODUCT_ENTITY_REQUEST,
  UPDATE_PRODUCT_ENTITY_SUCCESS,
  UPDATE_PRODUCT_ENTITY_FAIL,
  CREATE_PRODUCT_ENTITY_REQUEST,
  CREATE_PRODUCT_ENTITY_SUCCESS,
  CREATE_PRODUCT_ENTITY_FAIL,
  DELETE_PRODUCT_ENTITY_REQUEST,
  DELETE_PRODUCT_ENTITY_SUCCESS,
  DELETE_PRODUCT_ENTITY_FAIL,
  CLEAR_PRODUCTS_DATA_STATE,
  CLEAR_PRODUCT_ENTITY_STATE,
} from './types';

// SIZES
export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
}) as const;

export const getProductsSuccess = (payload: ProductData[]) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
}) as const;

export const getProductsFail = (payload: string) => ({
  type: GET_PRODUCTS_FAIL,
  payload,
}) as const;

export const getProductEntityRequest = (payload: number) => ({
  type: GET_PRODUCT_ENTITY_REQUEST,
  payload,
}) as const;

export const getProductEntitySuccess = (payload: ProductData) => ({
  type: GET_PRODUCT_ENTITY_SUCCESS,
  payload,
}) as const;

export const getProductEntityFail = (payload: string) => ({
  type: GET_PRODUCT_ENTITY_FAIL,
  payload,
}) as const;

export const updateProductEntityRequest = (payload: ProductData) => ({
  type: UPDATE_PRODUCT_ENTITY_REQUEST,
  payload,
}) as const;

export const updateProductEntitySuccess = () => ({
  type: UPDATE_PRODUCT_ENTITY_SUCCESS,
}) as const;

export const updateProductEntityFail = (payload: string) => ({
  type: UPDATE_PRODUCT_ENTITY_FAIL,
  payload,
}) as const;

export const createProductEntityRequest = (payload: ProductData) => ({
  type: CREATE_PRODUCT_ENTITY_REQUEST,
  payload,
}) as const;

export const createProductEntitySuccess = (payload: ProductData) => ({
  type: CREATE_PRODUCT_ENTITY_SUCCESS,
  payload,
}) as const;

export const createProductEntityFail = (payload: string) => ({
  type: CREATE_PRODUCT_ENTITY_FAIL,
  payload,
}) as const;

export const deleteProductEntityRequest = (payload: number) => ({
  type: DELETE_PRODUCT_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteProductEntitySuccess = () => ({
  type: DELETE_PRODUCT_ENTITY_SUCCESS,
}) as const;

export const deleteProductEntityFail = (payload: string) => ({
  type: DELETE_PRODUCT_ENTITY_FAIL,
  payload,
}) as const;

export const clearProductsDataState = () => ({
  type: CLEAR_PRODUCTS_DATA_STATE,
}) as const;

export const clearProductEntityState = () => ({
  type: CLEAR_PRODUCT_ENTITY_STATE,
}) as const;

export type productsActionsTypes = ReturnType<typeof getProductsRequest>
| ReturnType<typeof getProductsSuccess>
| ReturnType<typeof getProductsFail>
| ReturnType<typeof getProductEntityRequest>
| ReturnType<typeof getProductEntitySuccess>
| ReturnType<typeof getProductEntityFail>
| ReturnType<typeof updateProductEntityRequest>
| ReturnType<typeof updateProductEntitySuccess>
| ReturnType<typeof updateProductEntityFail>
| ReturnType<typeof createProductEntityRequest>
| ReturnType<typeof createProductEntitySuccess>
| ReturnType<typeof createProductEntityFail>
| ReturnType<typeof deleteProductEntityRequest>
| ReturnType<typeof deleteProductEntitySuccess>
| ReturnType<typeof deleteProductEntityFail>
| ReturnType<typeof clearProductsDataState>
| ReturnType<typeof clearProductEntityState>;
