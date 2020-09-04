import {
  GET_SVG_CATEGORIES_REQUEST,
  GET_SVG_CATEGORIES_SUCCESS,
  GET_SVG_CATEGORIES_FAIL,
  GET_SVG_CATEGORY_ENTITY_REQUEST,
  GET_SVG_CATEGORY_ENTITY_SUCCESS,
  GET_SVG_CATEGORY_ENTITY_FAIL,
  UPDATE_SVG_CATEGORY_ENTITY_REQUEST,
  UPDATE_SVG_CATEGORY_ENTITY_SUCCESS,
  UPDATE_SVG_CATEGORY_ENTITY_FAIL,
  CREATE_SVG_CATEGORY_ENTITY_REQUEST,
  CREATE_SVG_CATEGORY_ENTITY_SUCCESS,
  CREATE_SVG_CATEGORY_ENTITY_FAIL,
  DELETE_SVG_CATEGORY_ENTITY_REQUEST,
  DELETE_SVG_CATEGORY_ENTITY_SUCCESS,
  DELETE_SVG_CATEGORY_ENTITY_FAIL,
  CLEAR_SVG_CATEGORIES_DATA_STATE,
  CLEAR_SVG_CATEGORY_ENTITY_STATE,
  RequestName,
  SVGCategoriesDataState,
} from './types';
import { SVGCategoriesActionsTypes } from './actions';

const initialState: SVGCategoriesDataState = {
  svgcategories: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function svgCategoriesDataReducer(state = initialState, action: SVGCategoriesActionsTypes): SVGCategoriesDataState {
  switch (action.type) {
    // GET SVG CATEGORIES
    case GET_SVG_CATEGORIES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SVG_CATEGORIES],
      };
    }

    case GET_SVG_CATEGORIES_SUCCESS: {
      return {
        ...state,
        svgcategories: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVG_CATEGORIES),
      };
    }

    case GET_SVG_CATEGORIES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVG_CATEGORIES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_SVG_CATEGORIES, error: action.payload }],
      };
    }

    // GET SVG CATEGORY ENTITY
    case GET_SVG_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_SVG_CATEGORY_ENTITY],
      };
    }

    case GET_SVG_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVG_CATEGORY_ENTITY),
      };
    }

    case GET_SVG_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_SVG_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_SVG_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE SVG CATEGORY ENTITY
    case UPDATE_SVG_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_SVG_CATEGORY_ENTITY],
      };
    }

    case UPDATE_SVG_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_SVG_CATEGORY_ENTITY),
      };
    }

    case UPDATE_SVG_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_SVG_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_SVG_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE SVG CATEGORY ENTITY
    case CREATE_SVG_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_SVG_CATEGORY_ENTITY],
      };
    }

    case CREATE_SVG_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_SVG_CATEGORY_ENTITY),
      };
    }

    case CREATE_SVG_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_SVG_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_SVG_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE SVG CATEGORY ENTITY
    case DELETE_SVG_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_SVG_CATEGORY_ENTITY],
      };
    }

    case DELETE_SVG_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_SVG_CATEGORY_ENTITY),
      };
    }

    case DELETE_SVG_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_SVG_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_SVG_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_SVG_CATEGORIES_DATA_STATE: {
      return initialState;
    }

    case CLEAR_SVG_CATEGORY_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default svgCategoriesDataReducer;
