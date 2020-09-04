import {
  CHANGE_ACTIVE_LEFT_MENU,
  SET_MAIN_POPUP_STATE,
  SET_MAIN_POPUP_ANIMATION_STATE,
  LeftSideBarActionTypes,
  LeftSideBarState,
} from './types';

const initialState: LeftSideBarState = {
  selectedMenu: 'Users',
};

function leftSidebarReducer(
  state = initialState,
  action: LeftSideBarActionTypes,
): LeftSideBarState {
  switch (action.type) {
    case CHANGE_ACTIVE_LEFT_MENU: {
      return {
        ...state,
        selectedMenu: action.payload,
      };
    }
    case SET_MAIN_POPUP_STATE: {
      return { ...state };
    }

    case SET_MAIN_POPUP_ANIMATION_STATE: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
export default leftSidebarReducer;
