import {
  FontComboData,
  GET_FONT_COMBOS_REQUEST,
  GET_FONT_COMBOS_SUCCESS,
  GET_FONT_COMBOS_FAIL,
  GET_FONT_COMBO_ENTITY_REQUEST,
  GET_FONT_COMBO_ENTITY_SUCCESS,
  GET_FONT_COMBO_ENTITY_FAIL,
  UPDATE_FONT_COMBO_ENTITY_REQUEST,
  UPDATE_FONT_COMBO_ENTITY_SUCCESS,
  UPDATE_FONT_COMBO_ENTITY_FAIL,
  CREATE_FONT_COMBO_ENTITY_REQUEST,
  CREATE_FONT_COMBO_ENTITY_SUCCESS,
  CREATE_FONT_COMBO_ENTITY_FAIL,
  DELETE_FONT_COMBO_ENTITY_REQUEST,
  DELETE_FONT_COMBO_ENTITY_SUCCESS,
  DELETE_FONT_COMBO_ENTITY_FAIL,
  CLEAR_FONT_COMBOS_DATA_STATE,
  CLEAR_FONT_COMBO_ENTITY_STATE,
} from './types';

// COMBOS
export const getFontCombosRequest = () => ({
  type: GET_FONT_COMBOS_REQUEST,
}) as const;

export const getFontCombosSuccess = (payload: FontComboData[]) => ({
  type: GET_FONT_COMBOS_SUCCESS,
  payload,
}) as const;

export const getFontCombosFail = (payload: string) => ({
  type: GET_FONT_COMBOS_FAIL,
  payload,
}) as const;

export const getFontComboEntityRequest = (payload: number) => ({
  type: GET_FONT_COMBO_ENTITY_REQUEST,
  payload,
}) as const;

export const getFontComboEntitySuccess = (payload: FontComboData) => ({
  type: GET_FONT_COMBO_ENTITY_SUCCESS,
  payload,
}) as const;

export const getFontComboEntityFail = (payload: string) => ({
  type: GET_FONT_COMBO_ENTITY_FAIL,
  payload,
}) as const;

export const updateFontComboEntityRequest = (payload: FontComboData) => ({
  type: UPDATE_FONT_COMBO_ENTITY_REQUEST,
  payload,
}) as const;

export const updateFontComboEntitySuccess = () => ({
  type: UPDATE_FONT_COMBO_ENTITY_SUCCESS,
}) as const;

export const updateFontComboEntityFail = (payload: string) => ({
  type: UPDATE_FONT_COMBO_ENTITY_FAIL,
  payload,
}) as const;

export const createFontComboEntityRequest = (payload: FontComboData) => ({
  type: CREATE_FONT_COMBO_ENTITY_REQUEST,
  payload,
}) as const;

export const createFontComboEntitySuccess = (payload: FontComboData) => ({
  type: CREATE_FONT_COMBO_ENTITY_SUCCESS,
  payload,
}) as const;

export const createFontComboEntityFail = (payload: string) => ({
  type: CREATE_FONT_COMBO_ENTITY_FAIL,
  payload,
}) as const;

export const deleteFontComboEntityRequest = (payload: number) => ({
  type: DELETE_FONT_COMBO_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteFontComboEntitySuccess = () => ({
  type: DELETE_FONT_COMBO_ENTITY_SUCCESS,
}) as const;

export const deleteFontComboEntityFail = (payload: string) => ({
  type: DELETE_FONT_COMBO_ENTITY_FAIL,
  payload,
}) as const;

export const clearFontCombosDataState = () => ({
  type: CLEAR_FONT_COMBOS_DATA_STATE,
}) as const;

export const clearFontComboEntityState = () => ({
  type: CLEAR_FONT_COMBO_ENTITY_STATE,
}) as const;

export type fontCombosActionsTypes = ReturnType<typeof getFontCombosRequest>
| ReturnType<typeof getFontCombosSuccess>
| ReturnType<typeof getFontCombosFail>
| ReturnType<typeof getFontComboEntityRequest>
| ReturnType<typeof getFontComboEntitySuccess>
| ReturnType<typeof getFontComboEntityFail>
| ReturnType<typeof updateFontComboEntityRequest>
| ReturnType<typeof updateFontComboEntitySuccess>
| ReturnType<typeof updateFontComboEntityFail>
| ReturnType<typeof createFontComboEntityRequest>
| ReturnType<typeof createFontComboEntitySuccess>
| ReturnType<typeof createFontComboEntityFail>
| ReturnType<typeof deleteFontComboEntityRequest>
| ReturnType<typeof deleteFontComboEntitySuccess>
| ReturnType<typeof deleteFontComboEntityFail>
| ReturnType<typeof clearFontCombosDataState>
| ReturnType<typeof clearFontComboEntityState>;
