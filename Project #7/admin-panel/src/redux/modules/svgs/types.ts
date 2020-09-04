export enum RequestName {
  GET_SVGS = 'GET SVGS',
  GET_SVGS_BY_USERID = 'GET SVGS BY USERID',
  GET_SVG_ENTITY = 'GET SVG ENTITY',
  UPDATE_SVG_ENTITY = 'UPDATE SVG ENTITY',
  CREATE_SVG_ENTITY = 'CREATE SVG ENTITY',
  DELETE_SVG_ENTITY = 'DELETE SVG ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type SVGData = {
  id?: number,
  name: string,
  type: string,
  svgCategoryId: string,
  cost: string,
  order: string,
  svg?: any,
  link: string,
};

export type SVGsDataState = {
  svgs: SVGData[],
  details: SVGData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_SVGS_REQUEST = 'GET SVGS REQUEST';
export const GET_SVGS_SUCCESS = 'GET SVGS SUCCESS';
export const GET_SVGS_FAIL = 'GET SVGS FAIL';
export const GET_SVGS_BY_USERID_REQUEST = 'GET SVGS BY USERID REQUEST';
export const GET_SVGS_BY_USERID_SUCCESS = 'GET SVGS BY USERID SUCCESS';
export const GET_SVGS_BY_USERID_FAIL = 'GET SVGS BY USERID FAIL';
export const GET_SVG_ENTITY_REQUEST = 'GET SVG ENTITY REQUEST';
export const GET_SVG_ENTITY_SUCCESS = 'GET SVG ENTITY SUCCESS';
export const GET_SVG_ENTITY_FAIL = 'GET SVG ENTITY FAIL';
export const UPDATE_SVG_ENTITY_REQUEST = 'UPDATE SVG ENTITY REQUEST';
export const UPDATE_SVG_ENTITY_SUCCESS = 'UPDATE SVG ENTITY SUCCESS';
export const UPDATE_SVG_ENTITY_FAIL = 'UPDATE SVG ENTITY FAIL';
export const CREATE_SVG_ENTITY_REQUEST = 'CREATE SVG ENTITY REQUEST';
export const CREATE_SVG_ENTITY_SUCCESS = 'CREATE SVG ENTITY SUCCESS';
export const CREATE_SVG_ENTITY_FAIL = 'CREATE SVG ENTITY FAIL';
export const DELETE_SVG_ENTITY_REQUEST = 'DELETE SVG ENTITY REQUEST';
export const DELETE_SVG_ENTITY_SUCCESS = 'DELETE SVG ENTITY SUCCESS';
export const DELETE_SVG_ENTITY_FAIL = 'DELETE SVG ENTITY FAIL';
export const CLEAR_SVGS_DATA_STATE = 'CLEAR SVGS DATA STATE';
export const CLEAR_SVG_ENTITY_STATE = 'CLEAR SVG ENTITY STATE';
export const CONNECT_SVGS = 'CONNECT_SVGS';
