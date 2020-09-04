import {
  GET_FONT_COMBOS_REQUEST,
  GET_FONT_COMBOS_SUCCESS,
  GET_FONT_COMBOS_FAIL,
  GET_FONT_COMBO_ENTITY_REQUEST,
  GET_FONT_COMBO_ENTITY_SUCCESS,
  GET_FONT_COMBO_ENTITY_FAIL,
  UPDATE_FONT_COMBO_ENTITY_REQUEST,
  UPDATE_FONT_COMBO_ENTITY_SUCCESS,
  UPDATE_FONT_COMBO_ENTITY_FAIL,
  CREATE_FONT_COMBO_ENTITY_REQUEST,
  CREATE_FONT_COMBO_ENTITY_SUCCESS,
  CREATE_FONT_COMBO_ENTITY_FAIL,
  DELETE_FONT_COMBO_ENTITY_REQUEST,
  DELETE_FONT_COMBO_ENTITY_SUCCESS,
  DELETE_FONT_COMBO_ENTITY_FAIL,
  CLEAR_FONT_COMBOS_DATA_STATE,
  CLEAR_FONT_COMBO_ENTITY_STATE,
  RequestName,
  FontCombosDataState,
} from './types';
import { fontCombosActionsTypes } from './actions';

const initialState: FontCombosDataState = {
  fontcombos: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function fontCombosDataReducer(state = initialState, action: fontCombosActionsTypes): FontCombosDataState {
  switch (action.type) {
    // GET FONT COMBOS
    case GET_FONT_COMBOS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONT_COMBOS],
      };
    }

    case GET_FONT_COMBOS_SUCCESS: {
      return {
        ...state,
        fontcombos: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_COMBOS),
      };
    }

    case GET_FONT_COMBOS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_COMBOS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_FONT_COMBOS, error: action.payload }],
      };
    }

    // GET FONT COMBO ENTITY
    case GET_FONT_COMBO_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_FONT_COMBO_ENTITY],
      };
    }

    case GET_FONT_COMBO_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_COMBO_ENTITY),
      };
    }

    case GET_FONT_COMBO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_FONT_COMBO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.GET_FONT_COMBO_ENTITY, error: action.payload,
        }],
      };
    }

    // UPDATE FONT COMBO ENTITY
    case UPDATE_FONT_COMBO_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_FONT_COMBO_ENTITY],
      };
    }

    case UPDATE_FONT_COMBO_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_FONT_COMBO_ENTITY),
      };
    }

    case UPDATE_FONT_COMBO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_FONT_COMBO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.UPDATE_FONT_COMBO_ENTITY, error: action.payload,
        }],
      };
    }

    // CREATE FONT COMBO ENTITY
    case CREATE_FONT_COMBO_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_FONT_COMBO_ENTITY],
      };
    }

    case CREATE_FONT_COMBO_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_FONT_COMBO_ENTITY),
      };
    }

    case CREATE_FONT_COMBO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_FONT_COMBO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.CREATE_FONT_COMBO_ENTITY, error: action.payload,
        }],
      };
    }

    // DELETE FONT COMBO ENTITY
    case DELETE_FONT_COMBO_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_FONT_COMBO_ENTITY],
      };
    }

    case DELETE_FONT_COMBO_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_FONT_COMBO_ENTITY),
      };
    }

    case DELETE_FONT_COMBO_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_FONT_COMBO_ENTITY),
        requestErrors: [...state.requestErrors, {
          requestName: RequestName.DELETE_FONT_COMBO_ENTITY, error: action.payload,
        }],
      };
    }

    // CLEAR STATE
    case CLEAR_FONT_COMBOS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_FONT_COMBO_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default fontCombosDataReducer;
