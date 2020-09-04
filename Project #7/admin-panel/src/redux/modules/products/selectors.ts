import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectProductsData = (state: AppState) => state.productsData.products;
export const selectCategoriesData = (state: AppState) => state.categoriesData.categories;
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

export const selectProductsInfo = createSelector(
  selectProductsData,
  selectCategoriesData,
  (products, categories) => products.map((item:any) => (
    {
      id: item.id,
      name: item.name,
      categoryId: item.categoryId,
      category: categories.find(cat => cat.id === item.categoryId),
      order: item.order,
      templateGroups: item.templateGroups.length,
    }
  )),
);
