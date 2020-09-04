import {
  DELETE_LOADING_REQUEST,
  DELETE_REQUESTS_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  GET_USER_DESIGNS_REQUEST,
  GET_USER_DESIGNS_SUCCESS,
  GET_USER_DESIGNS_FAIL,
  ADD_USER_DESIGN_REQUEST,
  ADD_USER_DESIGN_SUCCESS,
  ADD_USER_DESIGN_FAIL,
  UPDATE_USER_DESIGN_REQUEST,
  UPDATE_USER_DESIGN_SUCCESS,
  UPDATE_USER_DESIGN_FAIL,
  DELETE_USER_DESIGN_REQUEST,
  DELETE_USER_DESIGN_SUCCESS,
  DELETE_USER_DESIGN_FAIL,
  GET_USER_COLORS_REQUEST,
  GET_USER_COLORS_SUCCESS,
  GET_USER_COLORS_FAIL,
  ADD_USER_COLORS_REQUEST,
  ADD_USER_COLORS_SUCCESS,
  ADD_USER_COLORS_FAIL,
  DELETE_USER_COLOR_REQUEST,
  DELETE_USER_COLOR_SUCCESS,
  DELETE_USER_COLOR_FAIL,
  GET_USER_IMAGES_REQUEST,
  GET_USER_IMAGES_SUCCESS,
  GET_USER_IMAGES_FAIL,
  UPLOAD_USER_IMAGES_REQUEST,
  UPLOAD_USER_IMAGES_SUCCESS,
  UPLOAD_USER_IMAGES_FAIL,
  DELETE_USER_IMAGE_REQUEST,
  DELETE_USER_IMAGE_SUCCESS,
  DELETE_USER_IMAGE_FAIL,
  GET_USER_FONTS_REQUEST,
  GET_USER_FONTS_SUCCESS,
  GET_USER_FONTS_FAIL,
  APPLY_USER_DESIGN,
  RequestName,
} from './types';
import {
  LoginRequestData, UserColor, UserData, UserFont, UserImage, UserDesign,
} from '../../../services/UserData';

// REQUESTS STATE
export const deleteLoadingRequest = (payload: RequestName) => ({
  type: DELETE_LOADING_REQUEST,
  payload,
}) as const;

export const deleteRequestsError = (payload: RequestName) => ({
  type: DELETE_REQUESTS_ERROR,
  payload,
}) as const;

// LOGIN AND LOGOUT
export const loginRequest = (payload: LoginRequestData) => ({
  type: LOGIN_REQUEST,
  payload,
}) as const;

export const loginSuccess = (payload: UserData) => ({
  type: LOGIN_SUCCESS,
  payload,
}) as const;

export const loginFail = (payload: string) => ({
  type: LOGIN_FAIL,
  payload,
}) as const;

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
}) as const;

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
}) as const;

export const logoutFail = (payload: string) => ({
  type: LOGOUT_FAIL,
  payload,
}) as const;

// PROFILE
export const getUserProfileRequest = () => ({
  type: GET_USER_PROFILE_REQUEST,
}) as const;

export const getUserProfileSuccess = (payload: UserData) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload,
}) as const;

export const getUserProfileFail = (payload: string) => ({
  type: GET_USER_PROFILE_FAIL,
  payload,
}) as const;

// DESIGNS
export const getUserDesignsRequest = () => ({
  type: GET_USER_DESIGNS_REQUEST,
}) as const;

export const getUserDesignsSuccess = (payload: UserDesign[]) => ({
  type: GET_USER_DESIGNS_SUCCESS,
  payload,
}) as const;

export const getUserDesignsFail = (payload: string) => ({
  type: GET_USER_DESIGNS_FAIL,
  payload,
}) as const;

export const addUserDesignRequest = (payload: Pick<UserDesign, 'name'>) => ({
  type: ADD_USER_DESIGN_REQUEST,
  payload,
}) as const;

export const addUserDesignSuccess = () => ({
  type: ADD_USER_DESIGN_SUCCESS,
}) as const;

export const addUserDesignFail = (payload: string) => ({
  type: ADD_USER_DESIGN_FAIL,
  payload,
}) as const;

export const updateUserDesignRequest = () => ({
  type: UPDATE_USER_DESIGN_REQUEST,
}) as const;

export const updateUserDesignSuccess = () => ({
  type: UPDATE_USER_DESIGN_SUCCESS,
}) as const;

export const updateUserDesignFail = (payload: string) => ({
  type: UPDATE_USER_DESIGN_FAIL,
  payload,
}) as const;

export const deleteUserDesignRequest = (payload: UserDesign['id']) => ({
  type: DELETE_USER_DESIGN_REQUEST,
  payload,
}) as const;

export const deleteUserDesignSuccess = () => ({
  type: DELETE_USER_DESIGN_SUCCESS,
}) as const;

export const deleteUserDesignFail = (payload: string) => ({
  type: DELETE_USER_DESIGN_FAIL,
  payload,
}) as const;

// COLORS
export const getUserColorsRequest = () => ({
  type: GET_USER_COLORS_REQUEST,
}) as const;

export const getUserColorsSuccess = (payload: UserColor[]) => ({
  type: GET_USER_COLORS_SUCCESS,
  payload,
}) as const;

export const getUserColorsFail = (payload: string) => ({
  type: GET_USER_COLORS_FAIL,
  payload,
}) as const;

export const addUserColorsRequest = (payload: Array<UserColor['color']>) => ({
  type: ADD_USER_COLORS_REQUEST,
  payload,
}) as const;

export const addUserColorsSuccess = () => ({
  type: ADD_USER_COLORS_SUCCESS,
}) as const;

export const addUserColorsFail = (payload: string) => ({
  type: ADD_USER_COLORS_FAIL,
  payload,
}) as const;

export const deleteUserColorRequest = (payload: UserColor['id']) => ({
  type: DELETE_USER_COLOR_REQUEST,
  payload,
}) as const;

export const deleteUserColorSuccess = () => ({
  type: DELETE_USER_COLOR_SUCCESS,
}) as const;

export const deleteUserColorFail = (payload: string) => ({
  type: DELETE_USER_COLOR_FAIL,
  payload,
}) as const;

// IMAGES
export const getUserImagesRequest = () => ({
  type: GET_USER_IMAGES_REQUEST,
}) as const;

export const getUserImagesSuccess = (payload: UserImage[]) => ({
  type: GET_USER_IMAGES_SUCCESS,
  payload,
}) as const;

export const getUserImagesFail = (payload: string) => ({
  type: GET_USER_IMAGES_FAIL,
  payload,
}) as const;

export const uploadUserImagesRequest = () => ({
  type: UPLOAD_USER_IMAGES_REQUEST,
}) as const;

export const uploadUserImagesSuccess = () => ({
  type: UPLOAD_USER_IMAGES_SUCCESS,
}) as const;

export const uploadUserImagesFail = (payload: string) => ({
  type: UPLOAD_USER_IMAGES_FAIL,
  payload,
}) as const;

export const deleteUserImageRequest = (payload: UserImage['id']) => ({
  type: DELETE_USER_IMAGE_REQUEST,
  payload,
}) as const;

export const deleteUserImageSuccess = () => ({
  type: DELETE_USER_IMAGE_SUCCESS,
}) as const;

export const deleteUserImageFail = (payload: string) => ({
  type: DELETE_USER_IMAGE_FAIL,
  payload,
}) as const;

// FONTS
export const getUserFontsRequest = () => ({
  type: GET_USER_FONTS_REQUEST,
}) as const;

export const getUserFontsSuccess = (payload: UserFont[]) => ({
  type: GET_USER_FONTS_SUCCESS,
  payload,
}) as const;

export const getUserFontsFail = (payload: string) => ({
  type: GET_USER_FONTS_FAIL,
  payload,
}) as const;

// OTHERS
export const applyUserDesign = (payload: UserDesign['id']) => ({
  type: APPLY_USER_DESIGN,
  payload,
}) as const;

export type userDataActionsTypes = ReturnType<typeof deleteLoadingRequest>
| ReturnType<typeof deleteRequestsError>
| ReturnType<typeof loginRequest>
| ReturnType<typeof loginSuccess>
| ReturnType<typeof loginFail>
| ReturnType<typeof logoutRequest>
| ReturnType<typeof logoutSuccess>
| ReturnType<typeof logoutFail>
| ReturnType<typeof getUserProfileRequest>
| ReturnType<typeof getUserProfileSuccess>
| ReturnType<typeof getUserProfileFail>
| ReturnType<typeof getUserDesignsRequest>
| ReturnType<typeof getUserDesignsSuccess>
| ReturnType<typeof getUserDesignsFail>
| ReturnType<typeof addUserDesignRequest>
| ReturnType<typeof addUserDesignSuccess>
| ReturnType<typeof addUserDesignFail>
| ReturnType<typeof updateUserDesignRequest>
| ReturnType<typeof updateUserDesignSuccess>
| ReturnType<typeof updateUserDesignFail>
| ReturnType<typeof deleteUserDesignRequest>
| ReturnType<typeof deleteUserDesignSuccess>
| ReturnType<typeof deleteUserDesignFail>
| ReturnType<typeof getUserColorsRequest>
| ReturnType<typeof getUserColorsSuccess>
| ReturnType<typeof getUserColorsFail>
| ReturnType<typeof addUserColorsRequest>
| ReturnType<typeof addUserColorsSuccess>
| ReturnType<typeof addUserColorsFail>
| ReturnType<typeof deleteUserColorRequest>
| ReturnType<typeof deleteUserColorSuccess>
| ReturnType<typeof deleteUserColorFail>
| ReturnType<typeof getUserImagesRequest>
| ReturnType<typeof getUserImagesSuccess>
| ReturnType<typeof getUserImagesFail>
| ReturnType<typeof uploadUserImagesRequest>
| ReturnType<typeof uploadUserImagesSuccess>
| ReturnType<typeof uploadUserImagesFail>
| ReturnType<typeof deleteUserImageRequest>
| ReturnType<typeof deleteUserImageSuccess>
| ReturnType<typeof deleteUserImageFail>
| ReturnType<typeof getUserFontsRequest>
| ReturnType<typeof getUserFontsSuccess>
| ReturnType<typeof getUserFontsFail>
| ReturnType<typeof applyUserDesign>;
