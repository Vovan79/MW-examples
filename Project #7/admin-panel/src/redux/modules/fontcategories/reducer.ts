import {
  GET_FONT_CATEGORIES_REQUEST,
  GET_FONT_CATEGORIES_SUCCESS,
  GET_FONT_CATEGORIES_FAIL,
  GET_FONT_CATEGORY_ENTITY_REQUEST,
  GET_FONT_CATEGORY_ENTITY_SUCCESS,
  GET_FONT_CATEGORY_ENTITY_FAIL,
  UPDATE_FONT_CATEGORY_ENTITY_REQUEST,
  UPDATE_FONT_CATEGORY_ENTITY_SUCCESS,
  UPDATE_FONT_CATEGORY_ENTITY_FAIL,
  CREATE_FONT_CATEGORY_ENTITY_REQUEST,
  CREATE_FONT_CATEGORY_ENTITY_SUCCESS,
  CREATE_FONT_CATEGORY_ENTITY_FAIL,
  DELETE_FONT_CATEGORY_ENTITY_REQUEST,
  DELETE_FONT_CATEGORY_ENTITY_SUCCESS,
  DELETE_FONT_CATEGORY_ENTITY_FAIL,
  CLEAR_FONT_CATEGORIES_DATA_STATE,
  CLEAR_FONT_CATEGORY_ENTITY_STATE,
  RequestName,
  FontCategoriesDataState,
} from './types';
import { fontCategoriesActionsTypes } from './actions';

const initialState: FontCategoriesDataState = {
  fontcategories: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function fontCategoriesDataReducer(state = initialState, action: fontCategoriesActionsTypes): FontCategoriesDataState {
  switch (action.type) {
    // GET FONT CATEGORIES
    case GET_FONT_CATEGORIES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONT_CATEGORIES],
      };
    }

    case GET_FONT_CATEGORIES_SUCCESS: {
      return {
        ...state,
        fontcategories: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_CATEGORIES),
      };
    }

    case GET_FONT_CATEGORIES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_CATEGORIES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_FONT_CATEGORIES, error: action.payload }],
      };
    }

    // GET FONT CATEGORY ENTITY
    case GET_FONT_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONT_CATEGORY_ENTITY],
      };
    }

    case GET_FONT_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_CATEGORY_ENTITY),
      };
    }

    case GET_FONT_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_FONT_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE FONT CATEGORY ENTITY
    case UPDATE_FONT_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_FONT_CATEGORY_ENTITY],
      };
    }

    case UPDATE_FONT_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_FONT_CATEGORY_ENTITY),
      };
    }

    case UPDATE_FONT_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_FONT_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_FONT_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE FONT CATEGORY ENTITY
    case CREATE_FONT_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_FONT_CATEGORY_ENTITY],
      };
    }

    case CREATE_FONT_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_FONT_CATEGORY_ENTITY),
      };
    }

    case CREATE_FONT_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_FONT_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_FONT_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE FONT CATEGORY ENTITY
    case DELETE_FONT_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_FONT_CATEGORY_ENTITY],
      };
    }

    case DELETE_FONT_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_FONT_CATEGORY_ENTITY),
      };
    }

    case DELETE_FONT_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_FONT_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_FONT_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_FONT_CATEGORIES_DATA_STATE: {
      return initialState;
    }

    case CLEAR_FONT_CATEGORY_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default fontCategoriesDataReducer;
