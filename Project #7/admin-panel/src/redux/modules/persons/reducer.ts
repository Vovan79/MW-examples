import {
  GET_PERSONS_REQUEST,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAIL,
  GET_PERSON_ENTITY_REQUEST,
  GET_PERSON_ENTITY_SUCCESS,
  GET_PERSON_ENTITY_FAIL,
  UPDATE_PERSON_ENTITY_REQUEST,
  UPDATE_PERSON_ENTITY_SUCCESS,
  UPDATE_PERSON_ENTITY_FAIL,
  CREATE_PERSON_ENTITY_REQUEST,
  CREATE_PERSON_ENTITY_SUCCESS,
  CREATE_PERSON_ENTITY_FAIL,
  DELETE_PERSON_ENTITY_REQUEST,
  DELETE_PERSON_ENTITY_SUCCESS,
  DELETE_PERSON_ENTITY_FAIL,
  CLEAR_PERSONS_DATA_STATE,
  CLEAR_PERSON_ENTITY_STATE,
  RequestName,
  PersonsDataState,
} from './types';
import { personsActionsTypes } from './actions';

const initialState: PersonsDataState = {
  persons: [],
  details: null,
  loadingRequests: [],
  requestErrors: [],
};

function personsDataReducer(state = initialState, action: personsActionsTypes): PersonsDataState {
  switch (action.type) {
    // GET PERSONS
    case GET_PERSONS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_PERSONS],
      };
    }

    case GET_PERSONS_SUCCESS: {
      return {
        ...state,
        persons: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PERSONS),
      };
    }

    case GET_PERSONS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PERSONS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_PERSONS, error: action.payload }],
      };
    }

    // GET PERSON ENTITY
    case GET_PERSON_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_PERSON_ENTITY],
      };
    }

    case GET_PERSON_ENTITY_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PERSON_ENTITY),
      };
    }

    case GET_PERSON_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_PERSON_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_PERSON_ENTITY, error: action.payload }],
      };
    }

    // UPDATE PERSON ENTITY
    case UPDATE_PERSON_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_PERSON_ENTITY],
      };
    }

    case UPDATE_PERSON_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_PERSON_ENTITY),
      };
    }

    case UPDATE_PERSON_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_PERSON_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.UPDATE_PERSON_ENTITY, error: action.payload }],
      };
    }

    // CREATE PERSON ENTITY
    case CREATE_PERSON_ENTITY_REQUEST: {
      return {
        ...state,
        details: action.payload,
        loadingRequests: [...state.loadingRequests, RequestName.CREATE_PERSON_ENTITY],
      };
    }

    case CREATE_PERSON_ENTITY_SUCCESS: {
      return {
        ...state,
        // details: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_PERSON_ENTITY),
      };
    }

    case CREATE_PERSON_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.CREATE_PERSON_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.CREATE_PERSON_ENTITY, error: action.payload }],
      };
    }

    // CREATE SIZE ENTITY
    case DELETE_PERSON_ENTITY_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_PERSON_ENTITY],
      };
    }

    case DELETE_PERSON_ENTITY_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_PERSON_ENTITY),
      };
    }

    case DELETE_PERSON_ENTITY_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_PERSON_ENTITY),
        requestErrors: [...state.requestErrors, { requestName: RequestName.DELETE_PERSON_ENTITY, error: action.payload }],
      };
    }

    // CLEAR STATE
    case CLEAR_PERSONS_DATA_STATE: {
      return initialState;
    }

    case CLEAR_PERSON_ENTITY_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export default personsDataReducer;
