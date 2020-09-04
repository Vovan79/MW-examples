import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectAppState = (state: AppState) => state;
export const selectUserData = (state: AppState) => state.userData.data;
export const selectRequestsState = (state: AppState) => ({
  loadingRequests: state.userData.loadingRequests,
  requestErrors: state.userData.requestErrors,
});

export const selectLoadingRequests = createSelector(
  selectRequestsState,
  ({ loadingRequests }) => loadingRequests,
);

export const selectRequestErrors = createSelector(
  selectRequestsState,
  ({ requestErrors }) => requestErrors,
);

export const selectUserInfo = createSelector(
  selectUserData,
  userData => ({
    id: userData.id,
    email: userData.email,
    role: userData.role,
  }),
);
