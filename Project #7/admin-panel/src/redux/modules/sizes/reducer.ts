import {
  GET_SIZES_REQUEST,
  GET_SIZES_SUCCESS,
  GET_SIZES_FAIL,
  GET_SIZE_ENTITY_REQUEST,
  GET_SIZE_ENTITY_SUCCESS,
  GET_SIZE_ENTITY_FAIL,
  UPDATE_SIZE_ENTITY_REQUEST,
  UPDATE_SIZE_ENTITY_SUCCESS,
  UPDATE_SIZE_ENTITY_FAIL,
  CREATE_SIZE_ENTITY_REQUEST,
  CREATE_SIZE_ENTITY_SUCCESS,
  CREATE_SIZE_ENTITY_FAIL,
  DELETE_SIZE_ENTITY_REQUEST,
  DELETE_SIZE_ENTITY_SUCCESS,
  DELETE_SIZE_ENTITY_FAIL,
  CLEAR_SIZES_DATA_STATE,
  CLEAR_SIZE_ENTITY_STATE,
  RequestName,
  SizesDataState,
} from './types';
import { sizesActionsTypes } from './actions';

const initialState: SizesDataState = {
  sizes: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function sizesDataReducer(state = initialState, action: sizesActionsTypes): SizesDataState {
  switch (action.type) {
    // GET SIZES
    case GET_SIZES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SIZES],
      };
    }

    case GET_SIZES_SUCCESS: {
      return {
        ...state,
        sizes: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SIZES),
      };
    }

    case GET_SIZES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SIZES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_SIZES, error: action.payload }],
      };
    }

    // GET SIZE ENTITY
    case GET_SIZE_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SIZE_ENTITY],
      };
    }

    case GET_SIZE_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SIZE_ENTITY),
      };
    }

    case GET_SIZE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SIZE_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_SIZE_ENTITY, error: action.payload }],
      };
    }

    // UPDATE SIZE ENTITY
    case UPDATE_SIZE_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_SIZE_ENTITY],
      };
    }

    case UPDATE_SIZE_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_SIZE_ENTITY),
      };
    }

    case UPDATE_SIZE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_SIZE_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.UPDATE_SIZE_ENTITY, error: action.payload }],
      };
    }

    // CREATE SIZE ENTITY
    case CREATE_SIZE_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_SIZE_ENTITY],
      };
    }

    case CREATE_SIZE_ENTITY_SUCCESS: {
      return {
        ...state,
        // details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_SIZE_ENTITY),
      };
    }

    case CREATE_SIZE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_SIZE_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.CREATE_SIZE_ENTITY, error: action.payload }],
      };
    }

    // CREATE SIZE ENTITY
    case DELETE_SIZE_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_SIZE_ENTITY],
      };
    }

    case DELETE_SIZE_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_SIZE_ENTITY),
      };
    }

    case DELETE_SIZE_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_SIZE_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.DELETE_SIZE_ENTITY, error: action.payload }],
      };
    }

    // CLEAR STATE
    case CLEAR_SIZES_DATA_STATE: {
      return initialState;
    }

    case CLEAR_SIZE_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default sizesDataReducer;
