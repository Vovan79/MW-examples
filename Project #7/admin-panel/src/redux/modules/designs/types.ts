export enum RequestName {
  GET_DESIGNS = 'GET DESIGNS',
  GET_DESIGNS_BY_USERID = 'GET DESIGNS BY USERID',
  GET_DESIGN_ENTITY = 'GET DESIGN ENTITY',
  UPDATE_DESIGN_ENTITY = 'UPDATE DESIGN ENTITY',
  CREATE_DESIGN_ENTITY = 'CREATE DESIGN ENTITY',
  DELETE_DESIGN_ENTITY = 'DELETE DESIGN ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type DesignData = {
  id?: number,
  name: string,
  design: string,
  preview: string,
  previewData: string,
  userId: string,
};

export type DesignsDataState = {
  designs: DesignData[],
  details: DesignData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_DESIGNS_REQUEST = 'GET DESIGNS REQUEST';
export const GET_DESIGNS_SUCCESS = 'GET DESIGNS SUCCESS';
export const GET_DESIGNS_FAIL = 'GET DESIGNS FAIL';
export const GET_DESIGNS_BY_USERID_REQUEST = 'GET DESIGNS BY USERID REQUEST';
export const GET_DESIGNS_BY_USERID_SUCCESS = 'GET DESIGNS BY USERID SUCCESS';
export const GET_DESIGNS_BY_USERID_FAIL = 'GET DESIGNS BY USERID FAIL';
export const GET_DESIGN_ENTITY_REQUEST = 'GET DESIGN ENTITY REQUEST';
export const GET_DESIGN_ENTITY_SUCCESS = 'GET DESIGN ENTITY SUCCESS';
export const GET_DESIGN_ENTITY_FAIL = 'GET DESIGN ENTITY FAIL';
export const UPDATE_DESIGN_ENTITY_REQUEST = 'UPDATE DESIGN ENTITY REQUEST';
export const UPDATE_DESIGN_ENTITY_SUCCESS = 'UPDATE DESIGN ENTITY SUCCESS';
export const UPDATE_DESIGN_ENTITY_FAIL = 'UPDATE DESIGN ENTITY FAIL';
export const CREATE_DESIGN_ENTITY_REQUEST = 'CREATE DESIGN ENTITY REQUEST';
export const CREATE_DESIGN_ENTITY_SUCCESS = 'CREATE DESIGN ENTITY SUCCESS';
export const CREATE_DESIGN_ENTITY_FAIL = 'CREATE DESIGN ENTITY FAIL';
export const DELETE_DESIGN_ENTITY_REQUEST = 'DELETE DESIGN ENTITY REQUEST';
export const DELETE_DESIGN_ENTITY_SUCCESS = 'DELETE DESIGN ENTITY SUCCESS';
export const DELETE_DESIGN_ENTITY_FAIL = 'DELETE DESIGN ENTITY FAIL';
export const CLEAR_DESIGNS_DATA_STATE = 'CLEAR DESIGNS DATA STATE';
export const CLEAR_DESIGN_ENTITY_STATE = 'CLEAR DESIGN ENTITY STATE';
