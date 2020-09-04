import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectAppState = (state: AppState) => state;
export const selectPersonsData = (state: AppState) => state.personsData.persons;
export const selectRequestsState = (state: AppState) => ({
  loadingRequests: state.personsData.loadingRequests,
  requestErrors: state.personsData.requestErrors,
});

export const selectLoadingRequests = createSelector(
  selectRequestsState,
  ({ loadingRequests }) => loadingRequests,
);

export const selectRequestErrors = createSelector(
  selectRequestsState,
  ({ requestErrors }) => requestErrors,
);
