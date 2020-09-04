import {
  UserRole, UserColor, UserFont, UserImage, UserDesign,
} from '../../../services/UserData';
import { LayoutDimensionsState } from '../layout/types';
import { PageDetails } from '../pages/types';
import { Asset } from '../assets/types';

export type Color = UserColor['color'];
export type Image = UserImage['link'];

export enum RequestName {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_USER_PROFILE = 'GET_USER_PROFILE',
  GET_USER_DESIGNS = 'GET_USER_DESIGNS',
  ADD_USER_DESIGN = 'ADD_USER_DESIGN',
  UPDATE_USER_DESIGN = 'UPDATE_USER_DESIGN',
  DELETE_USER_DESIGN = 'DELETE_USER_DESIGN',
  GET_USER_COLORS = 'GET_USER_COLORS',
  ADD_USER_COLORS = 'ADD_USER_COLORS',
  DELETE_USER_COLOR = 'DELETE_USER_COLOR',
  GET_USER_IMAGES = 'GET_USER_IMAGES',
  UPLOAD_USER_IMAGES = 'UPLOAD_USER_IMAGES',
  DELETE_USER_IMAGE = 'DELETE_USER_IMAGE',
  GET_USER_FONTS = 'GET_USER_FONTS',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type UserDataState = {
  data: {
    id: number,
    role: UserRole['name'],
    email: string,
    images: UserImage[],
    fonts: UserFont[],
    colors: UserColor[],
    designs: UserDesign[],
  }
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export type DesignData = {
  layoutDimensions: LayoutDimensionsState;
  pages: Array<Pick<PageDetails, 'id' | 'backgroundColor'> & { assets: Asset[] }>
};

export const DELETE_LOADING_REQUEST = 'DELETE_LOADING_REQUEST';
export const DELETE_REQUESTS_ERROR = 'DELETE_REQUESTS_ERROR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL';

export const GET_USER_COLORS_REQUEST = 'GET_USER_COLORS_REQUEST';
export const GET_USER_COLORS_SUCCESS = 'GET_USER_COLORS_SUCCESS';
export const GET_USER_COLORS_FAIL = 'GET_USER_COLORS_FAIL';

export const GET_USER_DESIGNS_REQUEST = 'GET_USER_DESIGNS_REQUEST';
export const GET_USER_DESIGNS_SUCCESS = 'GET_USER_DESIGNS_SUCCESS';
export const GET_USER_DESIGNS_FAIL = 'GET_USER_DESIGNS_FAIL';

export const ADD_USER_DESIGN_REQUEST = 'ADD_USER_DESIGN_REQUEST';
export const ADD_USER_DESIGN_SUCCESS = 'ADD_USER_DESIGN_SUCCESS';
export const ADD_USER_DESIGN_FAIL = 'ADD_USER_DESIGN_FAIL';

export const UPDATE_USER_DESIGN_REQUEST = 'UPDATE_USER_DESIGN_REQUEST';
export const UPDATE_USER_DESIGN_SUCCESS = 'UPDATE_USER_DESIGN_SUCCESS';
export const UPDATE_USER_DESIGN_FAIL = 'UPDATE_USER_DESIGN_FAIL';

export const DELETE_USER_DESIGN_REQUEST = 'DELETE_USER_DESIGN_REQUEST';
export const DELETE_USER_DESIGN_SUCCESS = 'DELETE_USER_DESIGN_SUCCESS';
export const DELETE_USER_DESIGN_FAIL = 'DELETE_USER_DESIGN_FAIL';

export const ADD_USER_COLORS_REQUEST = 'ADD_USER_COLORS_REQUEST';
export const ADD_USER_COLORS_SUCCESS = 'ADD_USER_COLORS_SUCCESS';
export const ADD_USER_COLORS_FAIL = 'ADD_USER_COLORS_FAIL';

export const DELETE_USER_COLOR_REQUEST = 'DELETE_USER_COLOR_REQUEST';
export const DELETE_USER_COLOR_SUCCESS = 'DELETE_USER_COLOR_SUCCESS';
export const DELETE_USER_COLOR_FAIL = 'DELETE_USER_COLOR_FAIL';

export const GET_USER_IMAGES_REQUEST = 'GET_USER_IMAGES_REQUEST';
export const GET_USER_IMAGES_SUCCESS = 'GET_USER_IMAGES_SUCCESS';
export const GET_USER_IMAGES_FAIL = 'GET_USER_IMAGES_FAIL';

export const UPLOAD_USER_IMAGES_REQUEST = 'UPLOAD_USER_IMAGES_REQUEST';
export const UPLOAD_USER_IMAGES_SUCCESS = 'UPLOAD_USER_IMAGES_SUCCESS';
export const UPLOAD_USER_IMAGES_FAIL = 'UPLOAD_USER_IMAGES_FAIL';

export const DELETE_USER_IMAGE_REQUEST = 'DELETE_USER_IMAGE_REQUEST';
export const DELETE_USER_IMAGE_SUCCESS = 'DELETE_USER_IMAGE_SUCCESS';
export const DELETE_USER_IMAGE_FAIL = 'DELETE_USER_IMAGE_FAIL';

export const GET_USER_FONTS_REQUEST = 'GET_USER_FONTS_REQUEST';
export const GET_USER_FONTS_SUCCESS = 'GET_USER_FONTS_SUCCESS';
export const GET_USER_FONTS_FAIL = 'GET_USER_FONTS_FAIL';

export const APPLY_USER_DESIGN = 'APPLY_USER_DESIGN';
