import { FontData } from '../fonts/types';

export enum RequestName {
  GET_FONT_COMBOS = 'GET FONT CATEGORIES',
  GET_FONT_COMBO_ENTITY = 'GET FONT COMBO ENTITY',
  UPDATE_FONT_COMBO_ENTITY = 'UPDATE FONT COMBO ENTITY',
  CREATE_FONT_COMBO_ENTITY = 'CREATE FONT COMBO ENTITY',
  DELETE_FONT_COMBO_ENTITY = 'DELETE FONT COMBO ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export const textStyleNames = ['h1', 'h2', 'h3', 'subTitle', 'body1', 'captionText'];

export type TextStyle = {
  name: typeof textStyleNames[number],
  fontId: FontData['id'],
  size: number,
  lineHeight: number,
  letterSpacing: number,
};

export type FontComboData = {
  id?: number,
  name: string,
  order: number,
  textStyles: TextStyle[],
};

export type FontCombosDataState = {
  fontcombos: FontComboData[],
  details: FontComboData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_FONT_COMBOS_REQUEST = 'GET FONT COMBOS REQUEST';
export const GET_FONT_COMBOS_SUCCESS = 'GET FONT COMBOS SUCCESS';
export const GET_FONT_COMBOS_FAIL = 'GET FONT COMBOS FAIL';
export const GET_FONT_COMBO_ENTITY_REQUEST = 'GET FONT COMBO ENTITY REQUEST';
export const GET_FONT_COMBO_ENTITY_SUCCESS = 'GET FONT COMBO ENTITY SUCCESS';
export const GET_FONT_COMBO_ENTITY_FAIL = 'GET FONT COMBO ENTITY FAIL';
export const UPDATE_FONT_COMBO_ENTITY_REQUEST = 'UPDATE FONT COMBO ENTITY REQUEST';
export const UPDATE_FONT_COMBO_ENTITY_SUCCESS = 'UPDATE FONT COMBO ENTITY SUCCESS';
export const UPDATE_FONT_COMBO_ENTITY_FAIL = 'UPDATE FONT COMBO ENTITY FAIL';
export const CREATE_FONT_COMBO_ENTITY_REQUEST = 'CREATE FONT COMBO ENTITY REQUEST';
export const CREATE_FONT_COMBO_ENTITY_SUCCESS = 'CREATE FONT COMBO ENTITY SUCCESS';
export const CREATE_FONT_COMBO_ENTITY_FAIL = 'CREATE FONT COMBO ENTITY FAIL';
export const DELETE_FONT_COMBO_ENTITY_REQUEST = 'DELETE FONT COMBO ENTITY REQUEST';
export const DELETE_FONT_COMBO_ENTITY_SUCCESS = 'DELETE FONT COMBO ENTITY SUCCESS';
export const DELETE_FONT_COMBO_ENTITY_FAIL = 'DELETE FONT COMBO ENTITY FAIL';
export const CLEAR_FONT_COMBOS_DATA_STATE = 'CLEAR FONT COMBOS DATA STATE';
export const CLEAR_FONT_COMBO_ENTITY_STATE = 'CLEAR FONT COMBO ENTITY STATE';
