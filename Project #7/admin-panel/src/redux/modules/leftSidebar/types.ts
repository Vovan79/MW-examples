import menuItems from '../../../components/interface_components/Sidebar/menuItems';

type Menus = typeof menuItems;
export type LeftMenuItems = Menus[number];

export interface LeftSideBarState {
  selectedMenu: LeftMenuItems['label'],
  // mainPopupOpen: boolean,
  // mainPopupAnimationInProgress: boolean,
}

export const CHANGE_ACTIVE_LEFT_MENU = 'CHANGE_ACTIVE_LEFT_MENU';
export const SET_MAIN_POPUP_STATE = 'SET_MAIN_POPUP_STATE';
export const SET_MAIN_POPUP_ANIMATION_STATE = 'SET_MAIN_POPUP_ANIMATION_STATE';

interface ChangeActiveMenuAction {
  type: typeof CHANGE_ACTIVE_LEFT_MENU,
  payload: LeftSideBarState['selectedMenu'],
}

interface SetMainPopupStateAction {
  type: typeof SET_MAIN_POPUP_STATE,
  payload: boolean,
}

interface SetMainPopupAnimationStateAction {
  type: typeof SET_MAIN_POPUP_ANIMATION_STATE,
  payload: boolean,
}

export type LeftSideBarActionTypes = ChangeActiveMenuAction
| SetMainPopupStateAction
| SetMainPopupAnimationStateAction;
