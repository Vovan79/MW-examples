import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectSVGCategoriesData = (state: AppState) => state.svgCategoriesData.svgcategories;
export const selectSVGsData = (state: AppState) => state.svgsData.svgs;

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

export const selectSVGsInfo = createSelector(
  selectSVGsData,
  selectSVGCategoriesData,
  (svgs, svgcategories) => svgs.map((item:any) => (
    {
      id: item.id,
      name: item.name,
      categoryId: item.categoryId,
      cost: item.cost,
      category: svgcategories.find(cat => cat.id === item.svgCategoryId),
    }
  )),
);

export type svgsInfoType = ReturnType<typeof selectSVGsInfo>;
