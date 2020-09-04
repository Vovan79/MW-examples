import {
  SizeData,
  GET_SIZES_REQUEST,
  GET_SIZES_SUCCESS,
  GET_SIZES_FAIL,
  GET_SIZE_ENTITY_REQUEST,
  GET_SIZE_ENTITY_SUCCESS,
  GET_SIZE_ENTITY_FAIL,
  UPDATE_SIZE_ENTITY_REQUEST,
  UPDATE_SIZE_ENTITY_SUCCESS,
  UPDATE_SIZE_ENTITY_FAIL,
  CREATE_SIZE_ENTITY_REQUEST,
  CREATE_SIZE_ENTITY_SUCCESS,
  CREATE_SIZE_ENTITY_FAIL,
  DELETE_SIZE_ENTITY_REQUEST,
  DELETE_SIZE_ENTITY_SUCCESS,
  DELETE_SIZE_ENTITY_FAIL,
  CLEAR_SIZES_DATA_STATE,
  CLEAR_SIZE_ENTITY_STATE,
} from './types';

// SIZES
export const getSizesRequest = () => ({
  type: GET_SIZES_REQUEST,
}) as const;

export const getSizesSuccess = (payload: SizeData[]) => ({
  type: GET_SIZES_SUCCESS,
  payload,
}) as const;

export const getSizesFail = (payload: string) => ({
  type: GET_SIZES_FAIL,
  payload,
}) as const;

export const getSizeEntityRequest = (payload: number) => ({
  type: GET_SIZE_ENTITY_REQUEST,
  payload,
}) as const;

export const getSizeEntitySuccess = (payload: SizeData) => ({
  type: GET_SIZE_ENTITY_SUCCESS,
  payload,
}) as const;

export const getSizeEntityFail = (payload: string) => ({
  type: GET_SIZE_ENTITY_FAIL,
  payload,
}) as const;

export const updateSizeEntityRequest = (payload: SizeData) => ({
  type: UPDATE_SIZE_ENTITY_REQUEST,
  payload,
}) as const;

export const updateSizeEntitySuccess = () => ({
  type: UPDATE_SIZE_ENTITY_SUCCESS,
}) as const;

export const updateSizeEntityFail = (payload: string) => ({
  type: UPDATE_SIZE_ENTITY_FAIL,
  payload,
}) as const;

export const createSizeEntityRequest = (payload: SizeData) => ({
  type: CREATE_SIZE_ENTITY_REQUEST,
  payload,
}) as const;

export const createSizeEntitySuccess = (payload: SizeData) => ({
  type: CREATE_SIZE_ENTITY_SUCCESS,
  payload,
}) as const;

export const createSizeEntityFail = (payload: string) => ({
  type: CREATE_SIZE_ENTITY_FAIL,
  payload,
}) as const;

export const deleteSizeEntityRequest = (payload: number) => ({
  type: DELETE_SIZE_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteSizeEntitySuccess = () => ({
  type: DELETE_SIZE_ENTITY_SUCCESS,
}) as const;

export const deleteSizeEntityFail = (payload: string) => ({
  type: DELETE_SIZE_ENTITY_FAIL,
  payload,
}) as const;

export const clearSizesDataState = () => ({
  type: CLEAR_SIZES_DATA_STATE,
}) as const;

export const clearSizeEntityState = () => ({
  type: CLEAR_SIZE_ENTITY_STATE,
}) as const;

export type sizesActionsTypes = ReturnType<typeof getSizesRequest>
| ReturnType<typeof getSizesSuccess>
| ReturnType<typeof getSizesFail>
| ReturnType<typeof getSizeEntityRequest>
| ReturnType<typeof getSizeEntitySuccess>
| ReturnType<typeof getSizeEntityFail>
| ReturnType<typeof updateSizeEntityRequest>
| ReturnType<typeof updateSizeEntitySuccess>
| ReturnType<typeof updateSizeEntityFail>
| ReturnType<typeof createSizeEntityRequest>
| ReturnType<typeof createSizeEntitySuccess>
| ReturnType<typeof createSizeEntityFail>
| ReturnType<typeof deleteSizeEntityRequest>
| ReturnType<typeof deleteSizeEntitySuccess>
| ReturnType<typeof deleteSizeEntityFail>
| ReturnType<typeof clearSizesDataState>
| ReturnType<typeof clearSizeEntityState>;
