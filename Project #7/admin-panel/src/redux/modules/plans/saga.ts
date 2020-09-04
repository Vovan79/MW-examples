import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_PLANS_REQUEST,
  GET_PLAN_ENTITY_REQUEST,
  UPDATE_PLAN_ENTITY_REQUEST,
  CREATE_PLAN_ENTITY_REQUEST,
  DELETE_PLAN_ENTITY_REQUEST,
} from './types';
import {
  getPlansRequest,
  getPlansSuccess,
  getPlansFail,
  getPlanEntityRequest,
  getPlanEntitySuccess,
  getPlanEntityFail,
  updatePlanEntityRequest,
  updatePlanEntitySuccess,
  updatePlanEntityFail,
  createPlanEntityRequest,
  createPlanEntitySuccess,
  createPlanEntityFail,
  deletePlanEntityRequest,
  deletePlanEntitySuccess,
  deletePlanEntityFail,
  clearPlansDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { PlansDataService } from '../../../services';

function* getPlans() {
  try {
    const plansData = yield call(PlansDataService.getPlansData);
    yield put(getPlansSuccess(plansData));
  } catch (err) {
    if (!err.response) {
      yield put(getPlansFail('Network error'));
      return;
    }
    yield put(getPlansFail(err.response.data.message));
  }
}

function* getPlanEntity({ payload }: ReturnType<typeof getPlanEntityRequest>) {
  try {
    const planEntityData = yield call(PlansDataService.getPlanEntityData, payload);
    yield put(getPlanEntitySuccess(planEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getPlanEntityFail('Network error'));
      return;
    }
    yield put(getPlanEntityFail(err.response.data.message));
  }
}

function* addPlanEntity({ payload }: ReturnType<typeof createPlanEntityRequest>) {
  try {
    const planEntityData = yield call(PlansDataService.addPlanEntityData, payload);
    yield put(createPlanEntitySuccess(planEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createPlanEntityFail('Network error'));
      return;
    }
    yield put(createPlanEntityFail(err.response.data.message));
  }
}

function* updatePlanEntity({ payload }: ReturnType<typeof updatePlanEntityRequest>) {
  try {
    yield call(PlansDataService.updatePlanEntityData, payload);
    yield put(updatePlanEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updatePlanEntityFail('Network error'));
      return;
    }
    yield put(updatePlanEntityFail(err.response.data.message));
  }
}

function* deletePlanEntity({ payload }: ReturnType<typeof deletePlanEntityRequest>) {
  try {
    yield call(PlansDataService.deletePlanEntityData, payload);
    yield put(deletePlanEntitySuccess());
    yield put(clearPlansDataState());
    yield put(getPlansRequest());
  } catch (err) {
    if (!err.response) {
      yield put(deletePlanEntityFail('Network error'));
      return;
    }
    yield put(deletePlanEntityFail(err.response.data.message));
  }
}

const planDataSaga = all([
  takeLatest(GET_PLANS_REQUEST, getPlans),
  takeLatest(GET_PLAN_ENTITY_REQUEST, getPlanEntity),
  takeLatest(UPDATE_PLAN_ENTITY_REQUEST, updatePlanEntity),
  takeLatest(CREATE_PLAN_ENTITY_REQUEST, addPlanEntity),
  takeLatest(DELETE_PLAN_ENTITY_REQUEST, deletePlanEntity),
]);

export default planDataSaga;
