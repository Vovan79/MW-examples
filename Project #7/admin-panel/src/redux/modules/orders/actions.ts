import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
} from './types';

import { UserData } from '../../../services/UserData';

// PERSONS
export const getOrdersRequest = () => ({
  type: GET_ORDERS_REQUEST,
}) as const;

export const getOrdersSuccess = (payload: UserData[]) => ({
  type: GET_ORDERS_SUCCESS,
  payload,
}) as const;

export const getOrdersFail = (payload: string) => ({
  type: GET_ORDERS_FAIL,
  payload,
}) as const;

export type ordersActionsTypes = ReturnType<typeof getOrdersRequest>
| ReturnType<typeof getOrdersSuccess>
| ReturnType<typeof getOrdersFail>;
