import {
  GET_PLANS_REQUEST,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_PLAN_ENTITY_REQUEST,
  GET_PLAN_ENTITY_SUCCESS,
  GET_PLAN_ENTITY_FAIL,
  UPDATE_PLAN_ENTITY_REQUEST,
  UPDATE_PLAN_ENTITY_SUCCESS,
  UPDATE_PLAN_ENTITY_FAIL,
  CREATE_PLAN_ENTITY_REQUEST,
  CREATE_PLAN_ENTITY_SUCCESS,
  CREATE_PLAN_ENTITY_FAIL,
  DELETE_PLAN_ENTITY_REQUEST,
  DELETE_PLAN_ENTITY_SUCCESS,
  DELETE_PLAN_ENTITY_FAIL,
  CLEAR_PLANS_DATA_STATE,
  CLEAR_PLAN_ENTITY_STATE,
  RequestName,
  PlansDataState,
} from './types';
import { plansActionsTypes } from './actions';

const initialState: PlansDataState = {
  plans: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function plansDataReducer(state = initialState, action: plansActionsTypes): PlansDataState {
  switch (action.type) {
    // GET PLANS
    case GET_PLANS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_PLANS],
      };
    }

    case GET_PLANS_SUCCESS: {
      return {
        ...state,
        plans: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PLANS),
      };
    }

    case GET_PLANS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PLANS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_PLANS, error: action.payload }],
      };
    }

    // GET PLAN ENTITY
    case GET_PLAN_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_PLAN_ENTITY],
      };
    }

    case GET_PLAN_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PLAN_ENTITY),
      };
    }

    case GET_PLAN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PLAN_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_PLAN_ENTITY, error: action.payload }],
      };
    }

    // UPDATE PLAN ENTITY
    case UPDATE_PLAN_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_PLAN_ENTITY],
      };
    }

    case UPDATE_PLAN_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_PLAN_ENTITY),
      };
    }

    case UPDATE_PLAN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_PLAN_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.UPDATE_PLAN_ENTITY, error: action.payload }],
      };
    }

    // CREATE PLAN ENTITY
    case CREATE_PLAN_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_PLAN_ENTITY],
      };
    }

    case CREATE_PLAN_ENTITY_SUCCESS: {
      return {
        ...state,
        // details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_PLAN_ENTITY),
      };
    }

    case CREATE_PLAN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_PLAN_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.CREATE_PLAN_ENTITY, error: action.payload }],
      };
    }

    // DELETE PLAN ENTITY
    case DELETE_PLAN_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_PLAN_ENTITY],
      };
    }

    case DELETE_PLAN_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_PLAN_ENTITY),
      };
    }

    case DELETE_PLAN_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_PLAN_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.DELETE_PLAN_ENTITY, error: action.payload }],
      };
    }

    // CLEAR STATE
    case CLEAR_PLANS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_PLAN_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default plansDataReducer;
