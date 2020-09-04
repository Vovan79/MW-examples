import {
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
  RequestName,
  ImagesDataState,
} from './types';
import { imagesActionsTypes } from './actions';

const initialState: ImagesDataState = {
  images: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function imagesDataReducer(state = initialState, action: imagesActionsTypes): ImagesDataState {
  switch (action.type) {
    // GET IMAGES
    case GET_IMAGES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_IMAGES],
      };
    }

    case GET_IMAGES_SUCCESS: {
      return {
        ...state,
        images: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_IMAGES),
      };
    }

    case GET_IMAGES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_IMAGES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_IMAGES, error: action.payload }],
      };
    }

    // GET IMAGES BY USERID
    case GET_IMAGES_BY_USERID_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_IMAGES_BY_USERID],
      };
    }

    case GET_IMAGES_BY_USERID_SUCCESS: {
      return {
        ...state,
        images: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_IMAGES_BY_USERID),
      };
    }

    case GET_IMAGES_BY_USERID_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_IMAGES_BY_USERID),
        requestErrors: [...state.requestErrors,
          { requestName: RequestName.GET_IMAGES_BY_USERID, error: action.payload }],
      };
    }

    // GET IMAGE ENTITY
    case GET_IMAGE_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_IMAGE_ENTITY],
      };
    }

    case GET_IMAGE_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_IMAGE_ENTITY),
      };
    }

    case GET_IMAGE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_IMAGE_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_IMAGE_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE IMAGE ENTITY
    case UPDATE_IMAGE_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_IMAGE_ENTITY],
      };
    }

    case UPDATE_IMAGE_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_IMAGE_ENTITY),
      };
    }

    case UPDATE_IMAGE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_IMAGE_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_IMAGE_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE IMAGE ENTITY
    case CREATE_IMAGE_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_IMAGE_ENTITY],
      };
    }

    case CREATE_IMAGE_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_IMAGE_ENTITY),
      };
    }

    case CREATE_IMAGE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_IMAGE_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_IMAGE_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE IMAGE ENTITY
    case DELETE_IMAGE_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_IMAGE_ENTITY],
      };
    }

    case DELETE_IMAGE_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_IMAGE_ENTITY),
      };
    }

    case DELETE_IMAGE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_IMAGE_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_IMAGE_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_IMAGES_DATA_STATE: {
      return initialState;
    }

    case CLEAR_IMAGE_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default imagesDataReducer;
