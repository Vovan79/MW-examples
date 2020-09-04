import {
  DesignData,
  GET_DESIGNS_REQUEST,
  GET_DESIGNS_SUCCESS,
  GET_DESIGNS_FAIL,
  GET_DESIGNS_BY_USERID_REQUEST,
  GET_DESIGNS_BY_USERID_SUCCESS,
  GET_DESIGNS_BY_USERID_FAIL,
  GET_DESIGN_ENTITY_REQUEST,
  GET_DESIGN_ENTITY_SUCCESS,
  GET_DESIGN_ENTITY_FAIL,
  UPDATE_DESIGN_ENTITY_REQUEST,
  UPDATE_DESIGN_ENTITY_SUCCESS,
  UPDATE_DESIGN_ENTITY_FAIL,
  CREATE_DESIGN_ENTITY_REQUEST,
  CREATE_DESIGN_ENTITY_SUCCESS,
  CREATE_DESIGN_ENTITY_FAIL,
  DELETE_DESIGN_ENTITY_REQUEST,
  DELETE_DESIGN_ENTITY_SUCCESS,
  DELETE_DESIGN_ENTITY_FAIL,
  CLEAR_DESIGNS_DATA_STATE,
  CLEAR_DESIGN_ENTITY_STATE,
} from './types';

// DESIGNS
export const getDesignsRequest = () => ({
  type: GET_DESIGNS_REQUEST,
}) as const;

export const getDesignsSuccess = (payload: DesignData[]) => ({
  type: GET_DESIGNS_SUCCESS,
  payload,
}) as const;

export const getDesignsFail = (payload: string) => ({
  type: GET_DESIGNS_FAIL,
  payload,
}) as const;

export const getDesignsByUserIdRequest = (payload: number) => ({
  type: GET_DESIGNS_BY_USERID_REQUEST,
  payload,
}) as const;

export const getDesignsByUserIdSuccess = (payload: DesignData[]) => ({
  type: GET_DESIGNS_BY_USERID_SUCCESS,
  payload,
}) as const;

export const getDesignsByUserIdFail = (payload: string) => ({
  type: GET_DESIGNS_BY_USERID_FAIL,
  payload,
}) as const;

export const getDesignEntityRequest = (payload: number) => ({
  type: GET_DESIGN_ENTITY_REQUEST,
  payload,
}) as const;

export const getDesignEntitySuccess = (payload: DesignData) => ({
  type: GET_DESIGN_ENTITY_SUCCESS,
  payload,
}) as const;

export const getDesignEntityFail = (payload: string) => ({
  type: GET_DESIGN_ENTITY_FAIL,
  payload,
}) as const;

export const updateDesignEntityRequest = (payload: DesignData) => ({
  type: UPDATE_DESIGN_ENTITY_REQUEST,
  payload,
}) as const;

export const updateDesignEntitySuccess = () => ({
  type: UPDATE_DESIGN_ENTITY_SUCCESS,
}) as const;

export const updateDesignEntityFail = (payload: string) => ({
  type: UPDATE_DESIGN_ENTITY_FAIL,
  payload,
}) as const;

export const createDesignEntityRequest = (payload: DesignData) => ({
  type: CREATE_DESIGN_ENTITY_REQUEST,
  payload,
}) as const;

export const createDesignEntitySuccess = (payload: DesignData) => ({
  type: CREATE_DESIGN_ENTITY_SUCCESS,
  payload,
}) as const;

export const createDesignEntityFail = (payload: string) => ({
  type: CREATE_DESIGN_ENTITY_FAIL,
  payload,
}) as const;

export const deleteDesignEntityRequest = (payload: number) => ({
  type: DELETE_DESIGN_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteDesignEntitySuccess = () => ({
  type: DELETE_DESIGN_ENTITY_SUCCESS,
}) as const;

export const deleteDesignEntityFail = (payload: string) => ({
  type: DELETE_DESIGN_ENTITY_FAIL,
  payload,
}) as const;

export const clearDesignsDataState = () => ({
  type: CLEAR_DESIGNS_DATA_STATE,
}) as const;

export const clearDesignEntityState = () => ({
  type: CLEAR_DESIGN_ENTITY_STATE,
}) as const;

export type designsActionsTypes = ReturnType<typeof getDesignsRequest>
| ReturnType<typeof getDesignsSuccess>
| ReturnType<typeof getDesignsFail>
| ReturnType<typeof getDesignsByUserIdRequest>
| ReturnType<typeof getDesignsByUserIdSuccess>
| ReturnType<typeof getDesignsByUserIdFail>
| ReturnType<typeof getDesignEntityRequest>
| ReturnType<typeof getDesignEntitySuccess>
| ReturnType<typeof getDesignEntityFail>
| ReturnType<typeof updateDesignEntityRequest>
| ReturnType<typeof updateDesignEntitySuccess>
| ReturnType<typeof updateDesignEntityFail>
| ReturnType<typeof createDesignEntityRequest>
| ReturnType<typeof createDesignEntitySuccess>
| ReturnType<typeof createDesignEntityFail>
| ReturnType<typeof deleteDesignEntityRequest>
| ReturnType<typeof deleteDesignEntitySuccess>
| ReturnType<typeof deleteDesignEntityFail>
| ReturnType<typeof clearDesignsDataState>
| ReturnType<typeof clearDesignEntityState>;
