import {
  TemplateGroupData,
  GET_TEMPLATE_GROUPS_REQUEST,
  GET_TEMPLATE_GROUPS_SUCCESS,
  GET_TEMPLATE_GROUPS_FAIL,
  GET_TEMPLATE_GROUP_ENTITY_REQUEST,
  GET_TEMPLATE_GROUP_ENTITY_SUCCESS,
  GET_TEMPLATE_GROUP_ENTITY_FAIL,
  UPDATE_TEMPLATE_GROUP_ENTITY_REQUEST,
  UPDATE_TEMPLATE_GROUP_ENTITY_SUCCESS,
  UPDATE_TEMPLATE_GROUP_ENTITY_FAIL,
  CREATE_TEMPLATE_GROUP_ENTITY_REQUEST,
  CREATE_TEMPLATE_GROUP_ENTITY_SUCCESS,
  CREATE_TEMPLATE_GROUP_ENTITY_FAIL,
  DELETE_TEMPLATE_GROUP_ENTITY_REQUEST,
  DELETE_TEMPLATE_GROUP_ENTITY_SUCCESS,
  DELETE_TEMPLATE_GROUP_ENTITY_FAIL,
  CLEAR_TEMPLATE_GROUPS_DATA_STATE,
  CLEAR_TEMPLATE_GROUP_ENTITY_STATE,
} from './types';

// SIZES
export const getTemplateGroupsRequest = () => ({
  type: GET_TEMPLATE_GROUPS_REQUEST,
}) as const;

export const getTemplateGroupsSuccess = (payload: TemplateGroupData[]) => ({
  type: GET_TEMPLATE_GROUPS_SUCCESS,
  payload,
}) as const;

export const getTemplateGroupsFail = (payload: string) => ({
  type: GET_TEMPLATE_GROUPS_FAIL,
  payload,
}) as const;

export const getTemplateGroupEntityRequest = (payload: number) => ({
  type: GET_TEMPLATE_GROUP_ENTITY_REQUEST,
  payload,
}) as const;

export const getTemplateGroupEntitySuccess = (payload: TemplateGroupData) => ({
  type: GET_TEMPLATE_GROUP_ENTITY_SUCCESS,
  payload,
}) as const;

export const getTemplateGroupEntityFail = (payload: string) => ({
  type: GET_TEMPLATE_GROUP_ENTITY_FAIL,
  payload,
}) as const;

export const updateTemplateGroupEntityRequest = (payload: TemplateGroupData) => ({
  type: UPDATE_TEMPLATE_GROUP_ENTITY_REQUEST,
  payload,
}) as const;

export const updateTemplateGroupEntitySuccess = () => ({
  type: UPDATE_TEMPLATE_GROUP_ENTITY_SUCCESS,
}) as const;

export const updateTemplateGroupEntityFail = (payload: string) => ({
  type: UPDATE_TEMPLATE_GROUP_ENTITY_FAIL,
  payload,
}) as const;

export const createTemplateGroupEntityRequest = (payload: TemplateGroupData) => ({
  type: CREATE_TEMPLATE_GROUP_ENTITY_REQUEST,
  payload,
}) as const;

export const createTemplateGroupEntitySuccess = (payload: TemplateGroupData) => ({
  type: CREATE_TEMPLATE_GROUP_ENTITY_SUCCESS,
  payload,
}) as const;

export const createTemplateGroupEntityFail = (payload: string) => ({
  type: CREATE_TEMPLATE_GROUP_ENTITY_FAIL,
  payload,
}) as const;

export const deleteTemplateGroupEntityRequest = (payload: number) => ({
  type: DELETE_TEMPLATE_GROUP_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteTemplateGroupEntitySuccess = () => ({
  type: DELETE_TEMPLATE_GROUP_ENTITY_SUCCESS,
}) as const;

export const deleteTemplateGroupEntityFail = (payload: string) => ({
  type: DELETE_TEMPLATE_GROUP_ENTITY_FAIL,
  payload,
}) as const;

export const clearTemplateGroupsDataState = () => ({
  type: CLEAR_TEMPLATE_GROUPS_DATA_STATE,
}) as const;

export const clearTemplateGroupEntityState = () => ({
  type: CLEAR_TEMPLATE_GROUP_ENTITY_STATE,
}) as const;

export type templateGroupsActionsTypes = ReturnType<typeof getTemplateGroupsRequest>
| ReturnType<typeof getTemplateGroupsSuccess>
| ReturnType<typeof getTemplateGroupsFail>
| ReturnType<typeof getTemplateGroupEntityRequest>
| ReturnType<typeof getTemplateGroupEntitySuccess>
| ReturnType<typeof getTemplateGroupEntityFail>
| ReturnType<typeof updateTemplateGroupEntityRequest>
| ReturnType<typeof updateTemplateGroupEntitySuccess>
| ReturnType<typeof updateTemplateGroupEntityFail>
| ReturnType<typeof createTemplateGroupEntityRequest>
| ReturnType<typeof createTemplateGroupEntitySuccess>
| ReturnType<typeof createTemplateGroupEntityFail>
| ReturnType<typeof deleteTemplateGroupEntityRequest>
| ReturnType<typeof deleteTemplateGroupEntitySuccess>
| ReturnType<typeof deleteTemplateGroupEntityFail>
| ReturnType<typeof clearTemplateGroupsDataState>
| ReturnType<typeof clearTemplateGroupEntityState>;
