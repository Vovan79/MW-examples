import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  GET_CATEGORY_ENTITY_REQUEST,
  GET_CATEGORY_ENTITY_SUCCESS,
  GET_CATEGORY_ENTITY_FAIL,
  UPDATE_CATEGORY_ENTITY_REQUEST,
  UPDATE_CATEGORY_ENTITY_SUCCESS,
  UPDATE_CATEGORY_ENTITY_FAIL,
  CREATE_CATEGORY_ENTITY_REQUEST,
  CREATE_CATEGORY_ENTITY_SUCCESS,
  CREATE_CATEGORY_ENTITY_FAIL,
  DELETE_CATEGORY_ENTITY_REQUEST,
  DELETE_CATEGORY_ENTITY_SUCCESS,
  DELETE_CATEGORY_ENTITY_FAIL,
  CLEAR_CATEGORIES_DATA_STATE,
  CLEAR_CATEGORY_ENTITY_STATE,
  RequestName,
  CategoriesDataState,
} from './types';
import { categoriesActionsTypes } from './actions';

const initialState: CategoriesDataState = {
  categories: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function categoriesDataReducer(state = initialState, action: categoriesActionsTypes): CategoriesDataState {
  switch (action.type) {
    // GET CATEGORIES
    case GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_CATEGORIES],
      };
    }

    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_CATEGORIES),
      };
    }

    case GET_CATEGORIES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_CATEGORIES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_CATEGORIES, error: action.payload }],
      };
    }

    // GET CATEGORY ENTITY
    case GET_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_CATEGORY_ENTITY],
      };
    }

    case GET_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_CATEGORY_ENTITY),
      };
    }

    case GET_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE CATEGORY ENTITY
    case UPDATE_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_CATEGORY_ENTITY],
      };
    }

    case UPDATE_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_CATEGORY_ENTITY),
      };
    }

    case UPDATE_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE CATEGORY ENTITY
    case CREATE_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_CATEGORY_ENTITY],
      };
    }

    case CREATE_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        // details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_CATEGORY_ENTITY),
      };
    }

    case CREATE_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE CATEGORY ENTITY
    case DELETE_CATEGORY_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_CATEGORY_ENTITY],
      };
    }

    case DELETE_CATEGORY_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_CATEGORY_ENTITY),
      };
    }

    case DELETE_CATEGORY_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_CATEGORY_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_CATEGORY_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_CATEGORIES_DATA_STATE: {
      return initialState;
    }

    case CLEAR_CATEGORY_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default categoriesDataReducer;
