import {
  GET_SVGS_REQUEST,
  GET_SVGS_SUCCESS,
  GET_SVGS_FAIL,
  GET_SVGS_BY_USERID_REQUEST,
  GET_SVGS_BY_USERID_SUCCESS,
  GET_SVGS_BY_USERID_FAIL,
  GET_SVG_ENTITY_REQUEST,
  GET_SVG_ENTITY_SUCCESS,
  GET_SVG_ENTITY_FAIL,
  UPDATE_SVG_ENTITY_REQUEST,
  UPDATE_SVG_ENTITY_SUCCESS,
  UPDATE_SVG_ENTITY_FAIL,
  CREATE_SVG_ENTITY_REQUEST,
  CREATE_SVG_ENTITY_SUCCESS,
  CREATE_SVG_ENTITY_FAIL,
  DELETE_SVG_ENTITY_REQUEST,
  DELETE_SVG_ENTITY_SUCCESS,
  DELETE_SVG_ENTITY_FAIL,
  CLEAR_SVGS_DATA_STATE,
  CLEAR_SVG_ENTITY_STATE,
  RequestName,
  SVGsDataState,
} from './types';
import { svgsActionsTypes } from './actions';

const initialState: SVGsDataState = {
  svgs: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function svgsDataReducer(state = initialState, action: svgsActionsTypes): SVGsDataState {
  switch (action.type) {
    // GET SVGS
    case GET_SVGS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SVGS],
      };
    }

    case GET_SVGS_SUCCESS: {
      return {
        ...state,
        svgs: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVGS),
      };
    }

    case GET_SVGS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVGS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_SVGS, error: action.payload }],
      };
    }

    // GET SVGS BY USERID
    case GET_SVGS_BY_USERID_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SVGS_BY_USERID],
      };
    }

    case GET_SVGS_BY_USERID_SUCCESS: {
      return {
        ...state,
        svgs: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVGS_BY_USERID),
      };
    }

    case GET_SVGS_BY_USERID_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVGS_BY_USERID),
        requestErrors: [...state.requestErrors,
          { requestName: RequestName.GET_SVGS_BY_USERID, error: action.payload }],
      };
    }

    // GET SVG ENTITY
    case GET_SVG_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SVG_ENTITY],
      };
    }

    case GET_SVG_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVG_ENTITY),
      };
    }

    case GET_SVG_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVG_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_SVG_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE SVG ENTITY
    case UPDATE_SVG_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_SVG_ENTITY],
      };
    }

    case UPDATE_SVG_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_SVG_ENTITY),
      };
    }

    case UPDATE_SVG_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_SVG_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_SVG_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE SVG ENTITY
    case CREATE_SVG_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_SVG_ENTITY],
      };
    }

    case CREATE_SVG_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_SVG_ENTITY),
      };
    }

    case CREATE_SVG_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_SVG_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_SVG_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE SVG ENTITY
    case DELETE_SVG_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_SVG_ENTITY],
      };
    }

    case DELETE_SVG_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_SVG_ENTITY),
      };
    }

    case DELETE_SVG_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_SVG_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_SVG_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_SVGS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_SVG_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default svgsDataReducer;
