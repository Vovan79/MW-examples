import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import { GET_ORDERS_REQUEST } from './types';
import { getOrdersSuccess, getOrdersFail } from './actions';
import { OrdersDataService } from '../../../services';

function* getOrders() {
  try {
    const ordersData = yield call(OrdersDataService.getOrdersData);
    yield put(getOrdersSuccess(ordersData));
  } catch (err) {
    if (!err.response) {
      yield put(getOrdersFail('Network error'));
      return;
    }
    yield put(getOrdersFail(err.response.data.message));
  }
}

const orderDataSaga = all([takeLatest(GET_ORDERS_REQUEST, getOrders)]);

export default orderDataSaga;
