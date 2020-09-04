import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  RequestName,
  OrdersDataState,
} from './types';
import { ordersActionsTypes } from './actions';

const initialState: OrdersDataState = {
  orders: [],
  loadingRequests: [],
  requestErrors: [],
};

function ordersDataReducer(state = initialState, action: ordersActionsTypes): OrdersDataState {
  switch (action.type) {
    // ORDERS
    case GET_ORDERS_REQUEST: {
      return {
        ...state,
        loadingRequests: [...state.loadingRequests, RequestName.GET_ORDERS],
      };
    }

    case GET_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_ORDERS),
      };
    }

    case GET_ORDERS_FAIL: {
      return {
        ...state,
        loadingRequests: state.loadingRequests.filter(item => item !== RequestName.GET_ORDERS),
        requestErrors: [...state.requestErrors, { requestName: RequestName.GET_ORDERS, error: action.payload }],
      };
    }

    default: {
      return state;
    }
  }
}

export default ordersDataReducer;
