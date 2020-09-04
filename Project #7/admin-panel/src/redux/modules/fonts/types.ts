export enum RequestName {
  GET_FONTS = 'GET FONTS',
  GET_FONTS_BY_USERID = 'GET FONTS BY USERID',
  GET_FONT_ENTITY = 'GET FONT ENTITY',
  UPDATE_FONT_ENTITY = 'UPDATE FONT ENTITY',
  CREATE_FONT_ENTITY = 'CREATE FONT ENTITY',
  DELETE_FONT_ENTITY = 'DELETE FONT ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type FontData = {
  id?: number,
  name: string,
  fontCategoryId: string,
  font?: any,
  link: string,
};

export type FontsDataState = {
  fonts: FontData[],
  details: FontData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_FONTS_REQUEST = 'GET FONTS REQUEST';
export const GET_FONTS_SUCCESS = 'GET FONTS SUCCESS';
export const GET_FONTS_FAIL = 'GET FONTS FAIL';
export const GET_FONTS_BY_USERID_REQUEST = 'GET FONTS BY USERID REQUEST';
export const GET_FONTS_BY_USERID_SUCCESS = 'GET FONTS BY USERID SUCCESS';
export const GET_FONTS_BY_USERID_FAIL = 'GET FONTS BY USERID FAIL';
export const GET_FONT_ENTITY_REQUEST = 'GET FONT ENTITY REQUEST';
export const GET_FONT_ENTITY_SUCCESS = 'GET FONT ENTITY SUCCESS';
export const GET_FONT_ENTITY_FAIL = 'GET FONT ENTITY FAIL';
export const UPDATE_FONT_ENTITY_REQUEST = 'UPDATE FONT ENTITY REQUEST';
export const UPDATE_FONT_ENTITY_SUCCESS = 'UPDATE FONT ENTITY SUCCESS';
export const UPDATE_FONT_ENTITY_FAIL = 'UPDATE FONT ENTITY FAIL';
export const CREATE_FONT_ENTITY_REQUEST = 'CREATE FONT ENTITY REQUEST';
export const CREATE_FONT_ENTITY_SUCCESS = 'CREATE FONT ENTITY SUCCESS';
export const CREATE_FONT_ENTITY_FAIL = 'CREATE FONT ENTITY FAIL';
export const DELETE_FONT_ENTITY_REQUEST = 'DELETE FONT ENTITY REQUEST';
export const DELETE_FONT_ENTITY_SUCCESS = 'DELETE FONT ENTITY SUCCESS';
export const DELETE_FONT_ENTITY_FAIL = 'DELETE FONT ENTITY FAIL';
export const CLEAR_FONTS_DATA_STATE = 'CLEAR FONTS DATA STATE';
export const CLEAR_FONT_ENTITY_STATE = 'CLEAR FONT ENTITY STATE';
export const CONNECT_FONTS = 'CONNECT_FONTS';
