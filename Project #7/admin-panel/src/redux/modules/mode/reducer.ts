import {
  TABLE_MODE,
  SET_TABLE_MODE,
  SET_DETAIL_MODE,
  SET_ADD_MODE,
  ModeDataState,
} from './types';
import { modeActionsTypes } from './actions';

const initialState: ModeDataState = {
  mode: TABLE_MODE,
  category: '',
  id: 0,
};

function modeDataReducer(state = initialState, action: modeActionsTypes): ModeDataState {
  const { type, payload } = action;
  switch (type) {
    // MODE DATA
    case SET_TABLE_MODE: {
      return payload;
    }

    case SET_DETAIL_MODE: {
      return payload;
    }

    case SET_ADD_MODE: {
      return payload;
    }

    default: {
      return state;
    }
  }
}

export default modeDataReducer;
