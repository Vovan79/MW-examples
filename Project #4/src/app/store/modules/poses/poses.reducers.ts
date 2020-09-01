const initialState_activeId: TPosesActiveIdReducer = null;
const activeId = (state = initialState_activeId, { type, payload }: TPosesActionsUnion): TPosesActiveIdReducer => {
  switch (type) {
    case PosesActionTypes.GET_POSES_BY_SLUG_SUCCESS:
      return payload.result;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};