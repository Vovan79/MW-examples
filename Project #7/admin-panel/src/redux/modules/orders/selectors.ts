import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectAppState = (state: AppState) => state;
export const selectOrdersData = (state: AppState) => state.ordersData.orders;
export const selectRequestsState = (state: AppState) => ({
  loadingRequests: state.ordersData.loadingRequests,
  requestErrors: state.ordersData.requestErrors,
});

export const selectLoadingRequests = createSelector(
  selectRequestsState,
  ({ loadingRequests }) => loadingRequests,
);

export const selectRequestErrors = createSelector(
  selectRequestsState,
  ({ requestErrors }) => requestErrors,
);

export const selectOrdersInfo = createSelector(selectOrdersData, ordersData => ordersData);
