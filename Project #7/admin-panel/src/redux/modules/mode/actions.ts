import {
  SET_TABLE_MODE,
  SET_DETAIL_MODE,
  SET_ADD_MODE,
  ModeDataState,
} from './types';

// MODE DATA
export const setTableMode = (payload: ModeDataState) => ({
  type: SET_TABLE_MODE,
  payload,
}) as const;

export const setDetailMode = (payload: ModeDataState) => ({
  type: SET_DETAIL_MODE,
  payload,
}) as const;

export const setAddMode = (payload: ModeDataState) => ({
  type: SET_ADD_MODE,
  payload,
}) as const;

export type modeActionsTypes = ReturnType<typeof setTableMode>
| ReturnType<typeof setDetailMode>
| ReturnType<typeof setAddMode>;
