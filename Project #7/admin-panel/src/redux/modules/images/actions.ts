import {
  ImageData,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAIL,
  GET_IMAGES_BY_USERID_REQUEST,
  GET_IMAGES_BY_USERID_SUCCESS,
  GET_IMAGES_BY_USERID_FAIL,
  GET_IMAGE_ENTITY_REQUEST,
  GET_IMAGE_ENTITY_SUCCESS,
  GET_IMAGE_ENTITY_FAIL,
  UPDATE_IMAGE_ENTITY_REQUEST,
  UPDATE_IMAGE_ENTITY_SUCCESS,
  UPDATE_IMAGE_ENTITY_FAIL,
  CREATE_IMAGE_ENTITY_REQUEST,
  CREATE_IMAGE_ENTITY_SUCCESS,
  CREATE_IMAGE_ENTITY_FAIL,
  DELETE_IMAGE_ENTITY_REQUEST,
  DELETE_IMAGE_ENTITY_SUCCESS,
  DELETE_IMAGE_ENTITY_FAIL,
  CLEAR_IMAGES_DATA_STATE,
  CLEAR_IMAGE_ENTITY_STATE,
} from './types';

// IMAGES
export const getImagesRequest = () => ({
  type: GET_IMAGES_REQUEST,
}) as const;

export const getImagesSuccess = (payload: ImageData[]) => ({
  type: GET_IMAGES_SUCCESS,
  payload,
}) as const;

export const getImagesFail = (payload: string) => ({
  type: GET_IMAGES_FAIL,
  payload,
}) as const;

export const getImagesByUserIdRequest = (payload: number) => ({
  type: GET_IMAGES_BY_USERID_REQUEST,
  payload,
}) as const;

export const getImagesByUserIdSuccess = (payload: ImageData[]) => ({
  type: GET_IMAGES_BY_USERID_SUCCESS,
  payload,
}) as const;

export const getImagesByUserIdFail = (payload: string) => ({
  type: GET_IMAGES_BY_USERID_FAIL,
  payload,
}) as const;

export const getImageEntityRequest = (payload: number) => ({
  type: GET_IMAGE_ENTITY_REQUEST,
  payload,
}) as const;

export const getImageEntitySuccess = (payload: ImageData) => ({
  type: GET_IMAGE_ENTITY_SUCCESS,
  payload,
}) as const;

export const getImageEntityFail = (payload: string) => ({
  type: GET_IMAGE_ENTITY_FAIL,
  payload,
}) as const;

export const updateImageEntityRequest = (payload: ImageData) => ({
  type: UPDATE_IMAGE_ENTITY_REQUEST,
  payload,
}) as const;

export const updateImageEntitySuccess = () => ({
  type: UPDATE_IMAGE_ENTITY_SUCCESS,
}) as const;

export const updateImageEntityFail = (payload: string) => ({
  type: UPDATE_IMAGE_ENTITY_FAIL,
  payload,
}) as const;

export const createImageEntityRequest = (payload: ImageData) => ({
  type: CREATE_IMAGE_ENTITY_REQUEST,
  payload,
}) as const;

export const createImageEntitySuccess = (payload: ImageData) => ({
  type: CREATE_IMAGE_ENTITY_SUCCESS,
  payload,
}) as const;

export const createImageEntityFail = (payload: string) => ({
  type: CREATE_IMAGE_ENTITY_FAIL,
  payload,
}) as const;

export const deleteImageEntityRequest = (payload: number) => ({
  type: DELETE_IMAGE_ENTITY_REQUEST,
  payload,
}) as const;

export const deleteImageEntitySuccess = () => ({
  type: DELETE_IMAGE_ENTITY_SUCCESS,
}) as const;

export const deleteImageEntityFail = (payload: string) => ({
  type: DELETE_IMAGE_ENTITY_FAIL,
  payload,
}) as const;

export const clearImagesDataState = () => ({
  type: CLEAR_IMAGES_DATA_STATE,
}) as const;

export const clearImageEntityState = () => ({
  type: CLEAR_IMAGE_ENTITY_STATE,
}) as const;

export type imagesActionsTypes = ReturnType<typeof getImagesRequest>
| ReturnType<typeof getImagesSuccess>
| ReturnType<typeof getImagesFail>
| ReturnType<typeof getImagesByUserIdRequest>
| ReturnType<typeof getImagesByUserIdSuccess>
| ReturnType<typeof getImagesByUserIdFail>
| ReturnType<typeof getImageEntityRequest>
| ReturnType<typeof getImageEntitySuccess>
| ReturnType<typeof getImageEntityFail>
| ReturnType<typeof updateImageEntityRequest>
| ReturnType<typeof updateImageEntitySuccess>
| ReturnType<typeof updateImageEntityFail>
| ReturnType<typeof createImageEntityRequest>
| ReturnType<typeof createImageEntitySuccess>
| ReturnType<typeof createImageEntityFail>
| ReturnType<typeof deleteImageEntityRequest>
| ReturnType<typeof deleteImageEntitySuccess>
| ReturnType<typeof deleteImageEntityFail>
| ReturnType<typeof clearImagesDataState>
| ReturnType<typeof clearImageEntityState>;
