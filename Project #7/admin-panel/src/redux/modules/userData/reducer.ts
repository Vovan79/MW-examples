import {
  DELETE_LOADING_REQUEST,
  DELETE_REQUESTS_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  GET_USER_DESIGNS_REQUEST,
  GET_USER_DESIGNS_SUCCESS,
  GET_USER_DESIGNS_FAIL,
  ADD_USER_DESIGN_REQUEST,
  ADD_USER_DESIGN_SUCCESS,
  ADD_USER_DESIGN_FAIL,
  UPDATE_USER_DESIGN_REQUEST,
  UPDATE_USER_DESIGN_SUCCESS,
  UPDATE_USER_DESIGN_FAIL,
  DELETE_USER_DESIGN_REQUEST,
  DELETE_USER_DESIGN_SUCCESS,
  DELETE_USER_DESIGN_FAIL,
  GET_USER_COLORS_REQUEST,
  GET_USER_COLORS_SUCCESS,
  GET_USER_COLORS_FAIL,
  ADD_USER_COLORS_REQUEST,
  ADD_USER_COLORS_SUCCESS,
  ADD_USER_COLORS_FAIL,
  DELETE_USER_COLOR_REQUEST,
  DELETE_USER_COLOR_SUCCESS,
  DELETE_USER_COLOR_FAIL,
  GET_USER_IMAGES_REQUEST,
  GET_USER_IMAGES_SUCCESS,
  GET_USER_IMAGES_FAIL,
  UPLOAD_USER_IMAGES_REQUEST,
  UPLOAD_USER_IMAGES_SUCCESS,
  UPLOAD_USER_IMAGES_FAIL,
  DELETE_USER_IMAGE_REQUEST,
  DELETE_USER_IMAGE_SUCCESS,
  DELETE_USER_IMAGE_FAIL,
  GET_USER_FONTS_REQUEST,
  GET_USER_FONTS_SUCCESS,
  GET_USER_FONTS_FAIL,
  RequestName,
  UserDataState,
} from './types';
import { userDataActionsTypes } from './actions';

const initialState: UserDataState = {
  data: {
    id: 0,
    role: 'guest',
    email: '',
    images: [],
    fonts: [],
    colors: [],
    designs: [],
  },
  loadingRequests: [],
  requestErrors: [],
};

function userDataReducer(
  state = initialState,
  action: userDataActionsTypes,
): UserDataState {
  switch (action.type) {
    // REQUESTS STATE
    case DELETE_LOADING_REQUEST: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== action.payload),
      };
    }

    case DELETE_REQUESTS_ERROR: {
      return {
        ...state,
        requestErrors: state.requestErrors.filter(item => item.requestName !== action.payload),
      };
    }

    // LOGIN AND LOGOUT
    case LOGIN_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.LOGIN],
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.LOGIN),
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.LOGIN),
        requestErrors: [...state.requestErrors, { requestName: RequestName.LOGIN, error: action.payload }],
      };
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.LOGOUT],
      };
    }

    case LOGOUT_SUCCESS: {
      return initialState;
    }

    case LOGOUT_FAIL: {
      return {
        ...state,
        requestErrors: [...state.requestErrors, { requestName: RequestName.LOGOUT, error: action.payload }],
      };
    }

    // PROFILE
    case GET_USER_PROFILE_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_USER_PROFILE],
      };
    }

    case GET_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_PROFILE),
      };
    }

    case GET_USER_PROFILE_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_PROFILE),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_USER_PROFILE, error: action.payload }],
      };
    }

    // DESIGNS
    case GET_USER_DESIGNS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_USER_DESIGNS],
      };
    }

    case GET_USER_DESIGNS_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, designs: action.payload },
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_DESIGNS),
      };
    }

    case GET_USER_DESIGNS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_DESIGNS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_USER_DESIGNS, error: action.payload }],
      };
    }

    case ADD_USER_DESIGN_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.ADD_USER_DESIGN],
      };
    }

    case ADD_USER_DESIGN_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.ADD_USER_DESIGN),
      };
    }

    case ADD_USER_DESIGN_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.ADD_USER_DESIGN),
        requestErrors: [...state.requestErrors, { requestName: RequestName.ADD_USER_DESIGN, error: action.payload }],
      };
    }

    case UPDATE_USER_DESIGN_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.UPDATE_USER_DESIGN],
      };
    }

    case UPDATE_USER_DESIGN_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_USER_DESIGN),
      };
    }

    case UPDATE_USER_DESIGN_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPDATE_USER_DESIGN),
        requestErrors: [
          ...state.requestErrors,
          { requestName: RequestName.UPDATE_USER_DESIGN, error: action.payload },
        ],
      };
    }

    case DELETE_USER_DESIGN_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_USER_DESIGN],
      };
    }

    case DELETE_USER_DESIGN_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_USER_DESIGN),
      };
    }

    case DELETE_USER_DESIGN_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_USER_DESIGN),
        requestErrors: [
          ...state.requestErrors,
          { requestName: RequestName.DELETE_USER_DESIGN, error: action.payload },
        ],
      };
    }

    // COLORS
    case GET_USER_COLORS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_USER_COLORS],
      };
    }

    case GET_USER_COLORS_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, colors: action.payload },
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_COLORS),
      };
    }

    case GET_USER_COLORS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_COLORS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_USER_COLORS, error: action.payload }],
      };
    }

    case ADD_USER_COLORS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.ADD_USER_COLORS],
      };
    }

    case ADD_USER_COLORS_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.ADD_USER_COLORS),
      };
    }

    case ADD_USER_COLORS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.ADD_USER_COLORS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.ADD_USER_COLORS, error: action.payload }],
      };
    }

    case DELETE_USER_COLOR_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_USER_COLOR],
      };
    }

    case DELETE_USER_COLOR_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_USER_COLOR),
      };
    }

    case DELETE_USER_COLOR_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_USER_COLOR),
        requestErrors: [...state.requestErrors, { requestName: RequestName.DELETE_USER_COLOR, error: action.payload }],
      };
    }

    // IMAGES
    case GET_USER_IMAGES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_USER_IMAGES],
      };
    }

    case GET_USER_IMAGES_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, images: action.payload },
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_IMAGES),
      };
    }

    case GET_USER_IMAGES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_IMAGES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_USER_IMAGES, error: action.payload }],
      };
    }

    case UPLOAD_USER_IMAGES_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.UPLOAD_USER_IMAGES],
      };
    }

    case UPLOAD_USER_IMAGES_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPLOAD_USER_IMAGES),
      };
    }

    case UPLOAD_USER_IMAGES_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.UPLOAD_USER_IMAGES),
        requestErrors: [...state.requestErrors, { requestName: RequestName.UPLOAD_USER_IMAGES, error: action.payload }],
      };
    }

    case DELETE_USER_IMAGE_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.DELETE_USER_IMAGE],
      };
    }

    case DELETE_USER_IMAGE_SUCCESS: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_USER_IMAGE),
      };
    }

    case DELETE_USER_IMAGE_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.DELETE_USER_IMAGE),
        requestErrors: [...state.requestErrors, { requestName: RequestName.DELETE_USER_IMAGE, error: action.payload }],
      };
    }

    // FONTS
    case GET_USER_FONTS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_USER_FONTS],
      };
    }

    case GET_USER_FONTS_SUCCESS: {
      return {
        ...state,
        data: { ...state.data, fonts: action.payload },
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_FONTS),
      };
    }

    case GET_USER_FONTS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_USER_FONTS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_USER_FONTS, error: action.payload }],
      };
    }

    default: {
      return state;
    }
  }
}
export default userDataReducer;
