import { UserData } from '../../../services/UserData';

export enum RequestName {
  GET_ORDERS = 'GET_ORDERS',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type OrdersDataState = {
  orders: UserData[],
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';
