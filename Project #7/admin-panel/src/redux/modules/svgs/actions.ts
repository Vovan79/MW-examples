import {
  SVGData,
  GET_SVGS_REQUEST,
  GET_SVGS_SUCCESS,
  GET_SVGS_FAIL,
  GET_SVGS_BY_USERID_REQUEST,
  GET_SVGS_BY_USERID_SUCCESS,
  GET_SVGS_BY_USERID_FAIL,
  GET_SVG_ENTITY_REQUEST,
  GET_SVG_ENTITY_SUCCESS,
  GET_SVG_ENTITY_FAIL,
  UPDATE_SVG_ENTITY_REQUEST,
  UPDATE_SVG_ENTITY_SUCCESS,
  UPDATE_SVG_ENTITY_FAIL,
  CREATE_SVG_ENTITY_REQUEST,
  CREATE_SVG_ENTITY_SUCCESS,
  CREATE_SVG_ENTITY_FAIL,
  DELETE_SVG_ENTITY_REQUEST,
  DELETE_SVG_ENTITY_SUCCESS,
  DELETE_SVG_ENTITY_FAIL,
  CLEAR_SVGS_DATA_STATE,
  CLEAR_SVG_ENTITY_STATE,
  CONNECT_SVGS,
} from './types';

// SVGS
export const getSVGsRequest = (payload: string) => ({
  type: GET_SVGS_REQUEST,
  payload,
}) as const;

export const getSVGsSuccess = (payload: SVGData[]) => ({
  type: GET_SVGS_SUCCESS,
  payload,
}) as const;

export const getSVGsFail = (payload: string) => ({
  type: GET_SVGS_FAIL,
  payload,
}) as const;

export const getSVGsByUserIdRequest = (payload: number) => ({
  type: GET_SVGS_BY_USERID_REQUEST,
  payload,
}) as const;

export const getSVGsByUserIdSuccess = (payload: SVGData[]) => ({
  type: GET_SVGS_BY_USERID_SUCCESS,
  payload,
}) as const;

export const getSVGsByUserIdFail = (payload: string) => ({
  type: GET_SVGS_BY_USERID_FAIL,
  payload,
}) as const;

export const getSVGEntityRequest = (payload: number) => ({
  type: GET_SVG_ENTITY_REQUEST,
  payload,
}) as const;

export const getSVGEntitySuccess = (payload: SVGData) => ({
  type: GET_SVG_ENTITY_SUCCESS,
  payload,
}) as const;

export const getSVGEntityFail = (payload: string) => ({
  type: GET_SVG_ENTITY_FAIL,
  payload,
}) as const;

export const updateSVGEntityRequest = (payload: SVGData) => ({
  type: UPDATE_SVG_ENTITY_REQUEST,
  payload,
}) as const;

export const updateSVGEntitySuccess = () => ({
  type: UPDATE_SVG_ENTITY_SUCCESS,
}) as const;

export const updateSVGEntityFail = (payload: string) => ({
  type: UPDATE_SVG_ENTITY_FAIL,
  payload,
}) as const;

export const createSVGEntityRequest = (payload: SVGData) => ({
  type: CREATE_SVG_ENTITY_REQUEST,
  payload,
}) as const;

export const createSVGEntitySuccess = (payload: SVGData) => ({
  type: CREATE_SVG_ENTITY_SUCCESS,
  payload,
}) as const;

export const createSVGEntityFail = (payload: string) => ({
  type: CREATE_SVG_ENTITY_FAIL,
  payload,
}) as const;

export const deleteSVGEntityRequest = (payload: { id: number, type: string }) => ({
  type: DELETE_SVG_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteSVGEntitySuccess = () => ({
  type: DELETE_SVG_ENTITY_SUCCESS,
}) as const;

export const deleteSVGEntityFail = (payload: string) => ({
  type: DELETE_SVG_ENTITY_FAIL,
  payload,
}) as const;

export const clearSVGsDataState = () => ({
  type: CLEAR_SVGS_DATA_STATE,
}) as const;

export const clearSVGEntityState = () => ({
  type: CLEAR_SVG_ENTITY_STATE,
}) as const;

export const connectSVGs = (payload: Array<SVGData>) => ({
  type: CONNECT_SVGS,
  payload,
}) as const;

export type svgsActionsTypes = ReturnType<typeof getSVGsRequest>
| ReturnType<typeof getSVGsSuccess>
| ReturnType<typeof getSVGsFail>
| ReturnType<typeof getSVGsByUserIdRequest>
| ReturnType<typeof getSVGsByUserIdSuccess>
| ReturnType<typeof getSVGsByUserIdFail>
| ReturnType<typeof getSVGEntityRequest>
| ReturnType<typeof getSVGEntitySuccess>
| ReturnType<typeof getSVGEntityFail>
| ReturnType<typeof updateSVGEntityRequest>
| ReturnType<typeof updateSVGEntitySuccess>
| ReturnType<typeof updateSVGEntityFail>
| ReturnType<typeof createSVGEntityRequest>
| ReturnType<typeof createSVGEntitySuccess>
| ReturnType<typeof createSVGEntityFail>
| ReturnType<typeof deleteSVGEntityRequest>
| ReturnType<typeof deleteSVGEntitySuccess>
| ReturnType<typeof deleteSVGEntityFail>
| ReturnType<typeof clearSVGsDataState>
| ReturnType<typeof clearSVGEntityState>
| ReturnType<typeof connectSVGs>;
