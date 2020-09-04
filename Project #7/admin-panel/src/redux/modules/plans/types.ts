export enum RequestName {
  GET_PLANS = 'GET PLANS',
  GET_PLAN_ENTITY = 'GET PLAN ENTITY',
  UPDATE_PLAN_ENTITY = 'UPDATE PLAN ENTITY',
  CREATE_PLAN_ENTITY = 'CREATE PLAN ENTITY',
  DELETE_PLAN_ENTITY = 'DELETE PLAN ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type PlanData = {
  id?: number,
  name: string,
  size: string,
  price: number,
};

export type PlansDataState = {
  plans: PlanData[],
  details: PlanData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_PLANS_REQUEST = 'GET PLANS REQUEST';
export const GET_PLANS_SUCCESS = 'GET PLANS SUCCESS';
export const GET_PLANS_FAIL = 'GET PLANS FAIL';
export const GET_PLAN_ENTITY_REQUEST = 'GET PLAN ENTITY REQUEST';
export const GET_PLAN_ENTITY_SUCCESS = 'GET PLAN ENTITY SUCCESS';
export const GET_PLAN_ENTITY_FAIL = 'GET PLAN ENTITY FAIL';
export const UPDATE_PLAN_ENTITY_REQUEST = 'UPDATE PLAN ENTITY REQUEST';
export const UPDATE_PLAN_ENTITY_SUCCESS = 'UPDATE PLAN ENTITY SUCCESS';
export const UPDATE_PLAN_ENTITY_FAIL = 'UPDATE PLAN ENTITY FAIL';
export const CREATE_PLAN_ENTITY_REQUEST = 'CREATE PLAN ENTITY REQUEST';
export const CREATE_PLAN_ENTITY_SUCCESS = 'CREATE PLAN ENTITY SUCCESS';
export const CREATE_PLAN_ENTITY_FAIL = 'CREATE PLAN ENTITY FAIL';
export const DELETE_PLAN_ENTITY_REQUEST = 'DELETE PLAN ENTITY REQUEST';
export const DELETE_PLAN_ENTITY_SUCCESS = 'DELETE PLAN ENTITY SUCCESS';
export const DELETE_PLAN_ENTITY_FAIL = 'DELETE PLAN ENTITY FAIL';
export const CLEAR_PLANS_DATA_STATE = 'CLEAR PLANS DATA STATE';
export const CLEAR_PLAN_ENTITY_STATE = 'CLEAR PLAN ENTITY STATE';