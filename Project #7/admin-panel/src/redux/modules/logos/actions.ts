import {
  LogoData,
  GET_LOGOS_REQUEST,
  GET_LOGOS_SUCCESS,
  GET_LOGOS_FAIL,
  GET_LOGOS_BY_USERID_REQUEST,
  GET_LOGOS_BY_USERID_SUCCESS,
  GET_LOGOS_BY_USERID_FAIL,
  GET_LOGO_ENTITY_REQUEST,
  GET_LOGO_ENTITY_SUCCESS,
  GET_LOGO_ENTITY_FAIL,
  UPDATE_LOGO_ENTITY_REQUEST,
  UPDATE_LOGO_ENTITY_SUCCESS,
  UPDATE_LOGO_ENTITY_FAIL,
  CREATE_LOGO_ENTITY_REQUEST,
  CREATE_LOGO_ENTITY_SUCCESS,
  CREATE_LOGO_ENTITY_FAIL,
  DELETE_LOGO_ENTITY_REQUEST,
  DELETE_LOGO_ENTITY_SUCCESS,
  DELETE_LOGO_ENTITY_FAIL,
  CLEAR_LOGOS_DATA_STATE,
  CLEAR_LOGO_ENTITY_STATE,
} from './types';

// LOGOS
export const getLogosRequest = () => ({
  type: GET_LOGOS_REQUEST,
}) as const;

export const getLogosSuccess = (payload: LogoData[]) => ({
  type: GET_LOGOS_SUCCESS,
  payload,
}) as const;

export const getLogosFail = (payload: string) => ({
  type: GET_LOGOS_FAIL,
  payload,
}) as const;

export const getLogosByUserIdRequest = (payload: number) => ({
  type: GET_LOGOS_BY_USERID_REQUEST,
  payload,
}) as const;

export const getLogosByUserIdSuccess = (payload: LogoData[]) => ({
  type: GET_LOGOS_BY_USERID_SUCCESS,
  payload,
}) as const;

export const getLogosByUserIdFail = (payload: string) => ({
  type: GET_LOGOS_BY_USERID_FAIL,
  payload,
}) as const;

export const getLogoEntityRequest = (payload: number) => ({
  type: GET_LOGO_ENTITY_REQUEST,
  payload,
}) as const;

export const getLogoEntitySuccess = (payload: LogoData) => ({
  type: GET_LOGO_ENTITY_SUCCESS,
  payload,
}) as const;

export const getLogoEntityFail = (payload: string) => ({
  type: GET_LOGO_ENTITY_FAIL,
  payload,
}) as const;

export const updateLogoEntityRequest = (payload: LogoData) => ({
  type: UPDATE_LOGO_ENTITY_REQUEST,
  payload,
}) as const;

export const updateLogoEntitySuccess = () => ({
  type: UPDATE_LOGO_ENTITY_SUCCESS,
}) as const;

export const updateLogoEntityFail = (payload: string) => ({
  type: UPDATE_LOGO_ENTITY_FAIL,
  payload,
}) as const;

export const createLogoEntityRequest = (payload: LogoData) => ({
  type: CREATE_LOGO_ENTITY_REQUEST,
  payload,
}) as const;

export const createLogoEntitySuccess = (payload: LogoData) => ({
  type: CREATE_LOGO_ENTITY_SUCCESS,
  payload,
}) as const;

export const createLogoEntityFail = (payload: string) => ({
  type: CREATE_LOGO_ENTITY_FAIL,
  payload,
}) as const;

export const deleteLogoEntityRequest = (payload: number) => ({
  type: DELETE_LOGO_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteLogoEntitySuccess = () => ({
  type: DELETE_LOGO_ENTITY_SUCCESS,
}) as const;

export const deleteLogoEntityFail = (payload: string) => ({
  type: DELETE_LOGO_ENTITY_FAIL,
  payload,
}) as const;

export const clearLogosDataState = () => ({
  type: CLEAR_LOGOS_DATA_STATE,
}) as const;

export const clearLogoEntityState = () => ({
  type: CLEAR_LOGO_ENTITY_STATE,
}) as const;

export type logosActionsTypes = ReturnType<typeof getLogosRequest>
| ReturnType<typeof getLogosSuccess>
| ReturnType<typeof getLogosFail>
| ReturnType<typeof getLogosByUserIdRequest>
| ReturnType<typeof getLogosByUserIdSuccess>
| ReturnType<typeof getLogosByUserIdFail>
| ReturnType<typeof getLogoEntityRequest>
| ReturnType<typeof getLogoEntitySuccess>
| ReturnType<typeof getLogoEntityFail>
| ReturnType<typeof updateLogoEntityRequest>
| ReturnType<typeof updateLogoEntitySuccess>
| ReturnType<typeof updateLogoEntityFail>
| ReturnType<typeof createLogoEntityRequest>
| ReturnType<typeof createLogoEntitySuccess>
| ReturnType<typeof createLogoEntityFail>
| ReturnType<typeof deleteLogoEntityRequest>
| ReturnType<typeof deleteLogoEntitySuccess>
| ReturnType<typeof deleteLogoEntityFail>
| ReturnType<typeof clearLogosDataState>
| ReturnType<typeof clearLogoEntityState>;
