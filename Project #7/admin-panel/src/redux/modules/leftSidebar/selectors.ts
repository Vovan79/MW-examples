import { createSelector } from 'reselect';
import { AppState } from '../../store';

export const selectLeftSidebar = (state: AppState) => state.leftSidebar;

export const selectSelectedMenu = createSelector(
  selectLeftSidebar, sidebar => sidebar.selectedMenu,
);

// export const selectMainPopupOpen = createSelector(
//   selectLeftSidebar, sidebar => sidebar.mainPopupOpen,
// );

// export const selectMainPopupAnimationState = createSelector(
//   selectLeftSidebar, sidebar => sidebar.mainPopupAnimationInProgress,
// );
