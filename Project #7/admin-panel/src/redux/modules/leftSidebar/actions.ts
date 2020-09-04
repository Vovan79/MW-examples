import {
  CHANGE_ACTIVE_LEFT_MENU,
  SET_MAIN_POPUP_STATE,
  SET_MAIN_POPUP_ANIMATION_STATE,
  LeftSideBarActionTypes,
  LeftMenuItems,
} from './types';

export const changeActive = (payload: LeftMenuItems['label']): LeftSideBarActionTypes => ({
  type: CHANGE_ACTIVE_LEFT_MENU,
  payload,
});

export const setMainPopupState = (payload: boolean): LeftSideBarActionTypes => ({
  type: SET_MAIN_POPUP_STATE,
  payload,
});

export const setMainPopupAnimationState = (payload: boolean): LeftSideBarActionTypes => ({
  type: SET_MAIN_POPUP_ANIMATION_STATE,
  payload,
});
