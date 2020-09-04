export enum RequestName {
  GET_SIZES = 'GET SIZES',
  GET_SIZE_ENTITY = 'GET SIZE ENTITY',
  UPDATE_SIZE_ENTITY = 'UPDATE SIZE ENTITY',
  CREATE_SIZE_ENTITY = 'CREATE SIZE ENTITY',
  DELETE_SIZE_ENTITY = 'DELETE SIZE ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type Margins = {
  top: number,
  bottom: number,
  left: number,
  right: number,
};

export type Columns = {
  number: number,
  gutter: number,
};

export type SizeData = {
  id?: number,
  name: string,
  width: number,
  height: number,
  margins: Margins,
  columns: Columns,
};

export type SizesDataState = {
  sizes: SizeData[],
  details: SizeData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_SIZES_REQUEST = 'GET SIZES REQUEST';
export const GET_SIZES_SUCCESS = 'GET SIZES SUCCESS';
export const GET_SIZES_FAIL = 'GET SIZES FAIL';
export const GET_SIZE_ENTITY_REQUEST = 'GET SIZE ENTITY REQUEST';
export const GET_SIZE_ENTITY_SUCCESS = 'GET SIZE ENTITY SUCCESS';
export const GET_SIZE_ENTITY_FAIL = 'GET SIZE ENTITY FAIL';
export const UPDATE_SIZE_ENTITY_REQUEST = 'UPDATE SIZE ENTITY REQUEST';
export const UPDATE_SIZE_ENTITY_SUCCESS = 'UPDATE SIZE ENTITY SUCCESS';
export const UPDATE_SIZE_ENTITY_FAIL = 'UPDATE SIZE ENTITY FAIL';
export const CREATE_SIZE_ENTITY_REQUEST = 'CREATE SIZE ENTITY REQUEST';
export const CREATE_SIZE_ENTITY_SUCCESS = 'CREATE SIZE ENTITY SUCCESS';
export const CREATE_SIZE_ENTITY_FAIL = 'CREATE SIZE ENTITY FAIL';
export const DELETE_SIZE_ENTITY_REQUEST = 'DELETE SIZE ENTITY REQUEST';
export const DELETE_SIZE_ENTITY_SUCCESS = 'DELETE SIZE ENTITY SUCCESS';
export const DELETE_SIZE_ENTITY_FAIL = 'DELETE SIZE ENTITY FAIL';
export const CLEAR_SIZES_DATA_STATE = 'CLEAR SIZES DATA STATE';
export const CLEAR_SIZE_ENTITY_STATE = 'CLEAR SIZE ENTITY STATE';
