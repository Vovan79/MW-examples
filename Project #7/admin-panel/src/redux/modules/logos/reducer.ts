import {
  GET_LOGOS_REQUEST,
  GET_LOGOS_SUCCESS,
  GET_LOGOS_FAIL,
  GET_LOGOS_BY_USERID_REQUEST,
  GET_LOGOS_BY_USERID_SUCCESS,
  GET_LOGOS_BY_USERID_FAIL,
  GET_LOGO_ENTITY_REQUEST,
  GET_LOGO_ENTITY_SUCCESS,
  GET_LOGO_ENTITY_FAIL,
  UPDATE_LOGO_ENTITY_REQUEST,
  UPDATE_LOGO_ENTITY_SUCCESS,
  UPDATE_LOGO_ENTITY_FAIL,
  CREATE_LOGO_ENTITY_REQUEST,
  CREATE_LOGO_ENTITY_SUCCESS,
  CREATE_LOGO_ENTITY_FAIL,
  DELETE_LOGO_ENTITY_REQUEST,
  DELETE_LOGO_ENTITY_SUCCESS,
  DELETE_LOGO_ENTITY_FAIL,
  CLEAR_LOGOS_DATA_STATE,
  CLEAR_LOGO_ENTITY_STATE,
  RequestName,
  LogosDataState,
} from './types';
import { logosActionsTypes } from './actions';

const initialState: LogosDataState = {
  logos: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function logosDataReducer(state = initialState, action: logosActionsTypes): LogosDataState {
  switch (action.type) {
    // GET LOGOS
    case GET_LOGOS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_LOGOS],
      };
    }

    case GET_LOGOS_SUCCESS: {
      return {
        ...state,
        logos: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_LOGOS),
      };
    }

    case GET_LOGOS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_LOGOS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_LOGOS, error: action.payload }],
      };
    }

    // GET LOGOS BY USERID
    case GET_LOGOS_BY_USERID_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_LOGOS_BY_USERID],
      };
    }

    case GET_LOGOS_BY_USERID_SUCCESS: {
      return {
        ...state,
        logos: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_LOGOS_BY_USERID),
      };
    }

    case GET_LOGOS_BY_USERID_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_LOGOS_BY_USERID),
        requestErrors: [...state.requestErrors,
          { requestName: RequestName.GET_LOGOS_BY_USERID, error: action.payload }],
      };
    }

    // GET LOGO ENTITY
    case GET_LOGO_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_LOGO_ENTITY],
      };
    }

    case GET_LOGO_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_LOGO_ENTITY),
      };
    }

    case GET_LOGO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_LOGO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_LOGO_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE LOGO ENTITY
    case UPDATE_LOGO_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_LOGO_ENTITY],
      };
    }

    case UPDATE_LOGO_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_LOGO_ENTITY),
      };
    }

    case UPDATE_LOGO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_LOGO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_LOGO_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE LOGO ENTITY
    case CREATE_LOGO_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_LOGO_ENTITY],
      };
    }

    case CREATE_LOGO_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_LOGO_ENTITY),
      };
    }

    case CREATE_LOGO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_LOGO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_LOGO_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE LOGO ENTITY
    case DELETE_LOGO_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_LOGO_ENTITY],
      };
    }

    case DELETE_LOGO_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_LOGO_ENTITY),
      };
    }

    case DELETE_LOGO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_LOGO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_LOGO_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_LOGOS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_LOGO_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default logosDataReducer;
