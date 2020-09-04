import {
  GET_DESIGNS_REQUEST,
  GET_DESIGNS_SUCCESS,
  GET_DESIGNS_FAIL,
  GET_DESIGNS_BY_USERID_REQUEST,
  GET_DESIGNS_BY_USERID_SUCCESS,
  GET_DESIGNS_BY_USERID_FAIL,
  GET_DESIGN_ENTITY_REQUEST,
  GET_DESIGN_ENTITY_SUCCESS,
  GET_DESIGN_ENTITY_FAIL,
  UPDATE_DESIGN_ENTITY_REQUEST,
  UPDATE_DESIGN_ENTITY_SUCCESS,
  UPDATE_DESIGN_ENTITY_FAIL,
  CREATE_DESIGN_ENTITY_REQUEST,
  CREATE_DESIGN_ENTITY_SUCCESS,
  CREATE_DESIGN_ENTITY_FAIL,
  DELETE_DESIGN_ENTITY_REQUEST,
  DELETE_DESIGN_ENTITY_SUCCESS,
  DELETE_DESIGN_ENTITY_FAIL,
  CLEAR_DESIGNS_DATA_STATE,
  CLEAR_DESIGN_ENTITY_STATE,
  RequestName,
  DesignsDataState,
} from './types';
import { designsActionsTypes } from './actions';

const initialState: DesignsDataState = {
  designs: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function designsDataReducer(state = initialState, action: designsActionsTypes): DesignsDataState {
  switch (action.type) {
    // GET DESIGNS
    case GET_DESIGNS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_DESIGNS],
      };
    }

    case GET_DESIGNS_SUCCESS: {
      return {
        ...state,
        designs: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_DESIGNS),
      };
    }

    case GET_DESIGNS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_DESIGNS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_DESIGNS, error: action.payload }],
      };
    }

    // GET DESIGNS BY USERID
    case GET_DESIGNS_BY_USERID_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_DESIGNS_BY_USERID],
      };
    }

    case GET_DESIGNS_BY_USERID_SUCCESS: {
      return {
        ...state,
        designs: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_DESIGNS_BY_USERID),
      };
    }

    case GET_DESIGNS_BY_USERID_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_DESIGNS_BY_USERID),
        requestErrors: [...state.requestErrors,
          { requestName: RequestName.GET_DESIGNS_BY_USERID, error: action.payload }],
      };
    }

    // GET DESIGN ENTITY
    case GET_DESIGN_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_DESIGN_ENTITY],
      };
    }

    case GET_DESIGN_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_DESIGN_ENTITY),
      };
    }

    case GET_DESIGN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_DESIGN_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_DESIGN_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE DESIGN ENTITY
    case UPDATE_DESIGN_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_DESIGN_ENTITY],
      };
    }

    case UPDATE_DESIGN_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_DESIGN_ENTITY),
      };
    }

    case UPDATE_DESIGN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_DESIGN_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_DESIGN_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE DESIGN ENTITY
    case CREATE_DESIGN_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_DESIGN_ENTITY],
      };
    }

    case CREATE_DESIGN_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_DESIGN_ENTITY),
      };
    }

    case CREATE_DESIGN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_DESIGN_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_DESIGN_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE DESIGN ENTITY
    case DELETE_DESIGN_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_DESIGN_ENTITY],
      };
    }

    case DELETE_DESIGN_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_DESIGN_ENTITY),
      };
    }

    case DELETE_DESIGN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_DESIGN_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_DESIGN_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_DESIGNS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_DESIGN_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default designsDataReducer;
