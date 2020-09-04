import {
  PlanData,
  GET_PLANS_REQUEST,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_PLAN_ENTITY_REQUEST,
  GET_PLAN_ENTITY_SUCCESS,
  GET_PLAN_ENTITY_FAIL,
  UPDATE_PLAN_ENTITY_REQUEST,
  UPDATE_PLAN_ENTITY_SUCCESS,
  UPDATE_PLAN_ENTITY_FAIL,
  CREATE_PLAN_ENTITY_REQUEST,
  CREATE_PLAN_ENTITY_SUCCESS,
  CREATE_PLAN_ENTITY_FAIL,
  DELETE_PLAN_ENTITY_REQUEST,
  DELETE_PLAN_ENTITY_SUCCESS,
  DELETE_PLAN_ENTITY_FAIL,
  CLEAR_PLANS_DATA_STATE,
  CLEAR_PLAN_ENTITY_STATE,
} from './types';

// PLANS
export const getPlansRequest = () => ({
  type: GET_PLANS_REQUEST,
}) as const;

export const getPlansSuccess = (payload: PlanData[]) => ({
  type: GET_PLANS_SUCCESS,
  payload,
}) as const;

export const getPlansFail = (payload: string) => ({
  type: GET_PLANS_FAIL,
  payload,
}) as const;

export const getPlanEntityRequest = (payload: number) => ({
  type: GET_PLAN_ENTITY_REQUEST,
  payload,
}) as const;

export const getPlanEntitySuccess = (payload: PlanData) => ({
  type: GET_PLAN_ENTITY_SUCCESS,
  payload,
}) as const;

export const getPlanEntityFail = (payload: string) => ({
  type: GET_PLAN_ENTITY_FAIL,
  payload,
}) as const;

export const updatePlanEntityRequest = (payload: PlanData) => ({
  type: UPDATE_PLAN_ENTITY_REQUEST,
  payload,
}) as const;

export const updatePlanEntitySuccess = () => ({
  type: UPDATE_PLAN_ENTITY_SUCCESS,
}) as const;

export const updatePlanEntityFail = (payload: string) => ({
  type: UPDATE_PLAN_ENTITY_FAIL,
  payload,
}) as const;

export const createPlanEntityRequest = (payload: PlanData) => ({
  type: CREATE_PLAN_ENTITY_REQUEST,
  payload,
}) as const;

export const createPlanEntitySuccess = (payload: PlanData) => ({
  type: CREATE_PLAN_ENTITY_SUCCESS,
  payload,
}) as const;

export const createPlanEntityFail = (payload: string) => ({
  type: CREATE_PLAN_ENTITY_FAIL,
  payload,
}) as const;

export const deletePlanEntityRequest = (payload: number) => ({
  type: DELETE_PLAN_ENTITY_REQUEST,
  payload,
}) as const;

export const deletePlanEntitySuccess = () => ({
  type: DELETE_PLAN_ENTITY_SUCCESS,
}) as const;

export const deletePlanEntityFail = (payload: string) => ({
  type: DELETE_PLAN_ENTITY_FAIL,
  payload,
}) as const;

export const clearPlansDataState = () => ({
  type: CLEAR_PLANS_DATA_STATE,
}) as const;

export const clearPlanEntityState = () => ({
  type: CLEAR_PLAN_ENTITY_STATE,
}) as const;

export type plansActionsTypes = ReturnType<typeof getPlansRequest>
| ReturnType<typeof getPlansSuccess>
| ReturnType<typeof getPlansFail>
| ReturnType<typeof getPlanEntityRequest>
| ReturnType<typeof getPlanEntitySuccess>
| ReturnType<typeof getPlanEntityFail>
| ReturnType<typeof updatePlanEntityRequest>
| ReturnType<typeof updatePlanEntitySuccess>
| ReturnType<typeof updatePlanEntityFail>
| ReturnType<typeof createPlanEntityRequest>
| ReturnType<typeof createPlanEntitySuccess>
| ReturnType<typeof createPlanEntityFail>
| ReturnType<typeof deletePlanEntityRequest>
| ReturnType<typeof deletePlanEntitySuccess>
| ReturnType<typeof deletePlanEntityFail>
| ReturnType<typeof clearPlansDataState>
| ReturnType<typeof clearPlanEntityState>;
