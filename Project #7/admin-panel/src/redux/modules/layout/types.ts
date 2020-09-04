export type LayoutDimensionsState = {
  flatWidth: number,
  flatHeight: number,
  marginTop: number,
  marginBottom: number,
  marginLeft: number,
  marginRight: number,
  columnGutter: number,
  columnNumber: number,
  zoomRatio: number,
};

export type ToolbarPosition = { x: number, y: number } | undefined;

export type LayoutElementsState = {
  guideLines: boolean,
  toolbarPosition: ToolbarPosition,
};

export type LayoutDimension = {
  name: keyof LayoutDimensionsState,
  value: number,
};

export const APPLY_LAYOUT_DIMENSIONS = 'APPLY_LAYOUT_DIMENSIONS';
export const CHANGE_DIMENSIONS = 'CHANGE_DIMENSIONS';
export const CHANGE_ONE_DIMENSION = 'CHANGE_ONE_DIMENSION';
export const CHANGE_ZOOM_RATIO = 'CHANGE_ZOOM_RATIO';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const GET_PRINT_FORMATS_REQUEST = 'GET_PRINT_FORMATS_REQUEST';
export const GET_PRINT_FORMATS_SUCCESS = 'GET_PRINT_FORMATS_SUCCESS';
export const GET_PRINT_FORMATS_FAIL = 'GET_PRINT_FORMATS_FAIL';
export const SET_TOOLBAR_POSITION = 'SET_TOOLBAR_POSITION';
