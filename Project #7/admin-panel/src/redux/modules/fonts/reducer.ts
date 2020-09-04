import {
  GET_FONTS_REQUEST,
  GET_FONTS_SUCCESS,
  GET_FONTS_FAIL,
  GET_FONTS_BY_USERID_REQUEST,
  GET_FONTS_BY_USERID_SUCCESS,
  GET_FONTS_BY_USERID_FAIL,
  GET_FONT_ENTITY_REQUEST,
  GET_FONT_ENTITY_SUCCESS,
  GET_FONT_ENTITY_FAIL,
  UPDATE_FONT_ENTITY_REQUEST,
  UPDATE_FONT_ENTITY_SUCCESS,
  UPDATE_FONT_ENTITY_FAIL,
  CREATE_FONT_ENTITY_REQUEST,
  CREATE_FONT_ENTITY_SUCCESS,
  CREATE_FONT_ENTITY_FAIL,
  DELETE_FONT_ENTITY_REQUEST,
  DELETE_FONT_ENTITY_SUCCESS,
  DELETE_FONT_ENTITY_FAIL,
  CLEAR_FONTS_DATA_STATE,
  CLEAR_FONT_ENTITY_STATE,
  RequestName,
  FontsDataState,
} from './types';
import { fontsActionsTypes } from './actions';

const initialState: FontsDataState = {
  fonts: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function fontsDataReducer(state = initialState, action: fontsActionsTypes): FontsDataState {
  switch (action.type) {
    // GET FONTS
    case GET_FONTS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONTS],
      };
    }

    case GET_FONTS_SUCCESS: {
      return {
        ...state,
        fonts: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONTS),
      };
    }

    case GET_FONTS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONTS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_FONTS, error: action.payload }],
      };
    }

    // GET FONTS BY USERID
    case GET_FONTS_BY_USERID_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONTS_BY_USERID],
      };
    }

    case GET_FONTS_BY_USERID_SUCCESS: {
      return {
        ...state,
        fonts: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONTS_BY_USERID),
      };
    }

    case GET_FONTS_BY_USERID_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONTS_BY_USERID),
        requestErrors: [...state.requestErrors,
          { requestName: RequestName.GET_FONTS_BY_USERID, error: action.payload }],
      };
    }

    // GET FONT ENTITY
    case GET_FONT_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONT_ENTITY],
      };
    }

    case GET_FONT_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_ENTITY),
      };
    }

    case GET_FONT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_FONT_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE FONT ENTITY
    case UPDATE_FONT_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_FONT_ENTITY],
      };
    }

    case UPDATE_FONT_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_FONT_ENTITY),
      };
    }

    case UPDATE_FONT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_FONT_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_FONT_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE FONT ENTITY
    case CREATE_FONT_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_FONT_ENTITY],
      };
    }

    case CREATE_FONT_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_FONT_ENTITY),
      };
    }

    case CREATE_FONT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_FONT_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_FONT_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE FONT ENTITY
    case DELETE_FONT_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_FONT_ENTITY],
      };
    }

    case DELETE_FONT_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_FONT_ENTITY),
      };
    }

    case DELETE_FONT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_FONT_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_FONT_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_FONTS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_FONT_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default fontsDataReducer;
