import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectFontsData = (state: AppState) => state.fontsData.fonts;
export const selectFontCategoriesData = (state: AppState) => state.fontCategoriesData.fontcategories;

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

export const selectFontsInfo = createSelector(
  selectFontsData,
  selectFontCategoriesData,
  (fonts, fontcategories) => fonts.map((item:any) => (
    {
      id: item.id,
      name: item.name,
      categoryId: item.categoryId,
      category: fontcategories.find(cat => cat.id === item.fontCategoryId),
    }
  )),
);

export type fontsInfoType = ReturnType<typeof selectFontsInfo>;
