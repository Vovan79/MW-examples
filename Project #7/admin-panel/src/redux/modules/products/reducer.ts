import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_ENTITY_REQUEST,
  GET_PRODUCT_ENTITY_SUCCESS,
  GET_PRODUCT_ENTITY_FAIL,
  UPDATE_PRODUCT_ENTITY_REQUEST,
  UPDATE_PRODUCT_ENTITY_SUCCESS,
  UPDATE_PRODUCT_ENTITY_FAIL,
  CREATE_PRODUCT_ENTITY_REQUEST,
  CREATE_PRODUCT_ENTITY_SUCCESS,
  CREATE_PRODUCT_ENTITY_FAIL,
  DELETE_PRODUCT_ENTITY_REQUEST,
  DELETE_PRODUCT_ENTITY_SUCCESS,
  DELETE_PRODUCT_ENTITY_FAIL,
  CLEAR_PRODUCTS_DATA_STATE,
  CLEAR_PRODUCT_ENTITY_STATE,
  RequestName,
  ProductsDataState,
} from './types';
import { productsActionsTypes } from './actions';

const initialState: ProductsDataState = {
  products: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function productsDataReducer(state = initialState, action: productsActionsTypes): ProductsDataState {
  switch (action.type) {
    // GET PRODUCTS
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_PRODUCTS],
      };
    }

    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PRODUCTS),
      };
    }

    case GET_PRODUCTS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PRODUCTS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_PRODUCTS, error: action.payload }],
      };
    }

    // GET PRODUCT ENTITY
    case GET_PRODUCT_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_PRODUCT_ENTITY],
      };
    }

    case GET_PRODUCT_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PRODUCT_ENTITY),
      };
    }

    case GET_PRODUCT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PRODUCT_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_PRODUCT_ENTITY, error: action.payload }],
      };
    }

    // UPDATE PRODUCT ENTITY
    case UPDATE_PRODUCT_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_PRODUCT_ENTITY],
      };
    }

    case UPDATE_PRODUCT_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_PRODUCT_ENTITY),
      };
    }

    case UPDATE_PRODUCT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_PRODUCT_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.UPDATE_PRODUCT_ENTITY, error: action.payload }],
      };
    }

    // CREATE PRODUCT ENTITY
    case CREATE_PRODUCT_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_PRODUCT_ENTITY],
      };
    }

    case CREATE_PRODUCT_ENTITY_SUCCESS: {
      return {
        ...state,
        // details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_PRODUCT_ENTITY),
      };
    }

    case CREATE_PRODUCT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_PRODUCT_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.CREATE_PRODUCT_ENTITY, error: action.payload }],
      };
    }

    // CREATE SIZE ENTITY
    case DELETE_PRODUCT_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_PRODUCT_ENTITY],
      };
    }

    case DELETE_PRODUCT_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_PRODUCT_ENTITY),
      };
    }

    case DELETE_PRODUCT_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_PRODUCT_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.DELETE_PRODUCT_ENTITY, error: action.payload }],
      };
    }

    // CLEAR STATE
    case CLEAR_PRODUCTS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_PRODUCT_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default productsDataReducer;
