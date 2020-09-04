import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectAppState = (state: AppState) => state;
export const selectSizesData = (state: AppState) => state.sizesData.sizes;
export const selectRequestsState = (state: AppState) => ({
  loadingRequests: state.sizesData.loadingRequests,
  requestErrors: state.sizesData.requestErrors,
});

export const selectLoadingRequests = createSelector(
  selectRequestsState,
  ({ loadingRequests }) => loadingRequests,
);

export const selectRequestErrors = createSelector(
  selectRequestsState,
  ({ requestErrors }) => requestErrors,
);
