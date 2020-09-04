import {
  all, call, takeLatest, put,
} from 'redux-saga/effects';
import {
  GET_PERSONS_REQUEST,
  GET_PERSON_ENTITY_REQUEST,
  UPDATE_PERSON_ENTITY_REQUEST,
  CREATE_PERSON_ENTITY_REQUEST,
  DELETE_PERSON_ENTITY_REQUEST,
} from './types';
import {
  getPersonsRequest,
  getPersonsSuccess,
  getPersonsFail,
  getPersonEntityRequest,
  getPersonEntitySuccess,
  getPersonEntityFail,
  updatePersonEntityRequest,
  updatePersonEntitySuccess,
  updatePersonEntityFail,
  createPersonEntityRequest,
  createPersonEntitySuccess,
  createPersonEntityFail,
  deletePersonEntityRequest,
  deletePersonEntitySuccess,
  deletePersonEntityFail,
  clearPersonsDataState,
} from './actions';
import { TABLE_MODE } from '../mode/types';
import { setTableMode } from '../mode/actions';
import { PersonsDataService } from '../../../services';

function* getPersons({ payload }: ReturnType<typeof getPersonsRequest>) {
  try {
    const personsData = yield call(PersonsDataService.getPersonsData, payload);
    yield put(getPersonsSuccess(personsData));
  } catch (err) {
    if (!err.response) {
      yield put(getPersonsFail('Network error'));
      return;
    }
    yield put(getPersonsFail(err.response.data.message));
  }
}

function* getPersonEntity({ payload }: ReturnType<typeof getPersonEntityRequest>) {
  try {
    const personEntityData = yield call(PersonsDataService.getPersonEntityData, payload);
    yield put(getPersonEntitySuccess(personEntityData));
  } catch (err) {
    if (!err.response) {
      yield put(getPersonEntityFail('Network error'));
      return;
    }
    yield put(getPersonEntityFail(err.response.data.message));
  }
}

function* addPersonEntity({ payload }: ReturnType<typeof createPersonEntityRequest>) {
  try {
    const sizeEntityData = yield call(PersonsDataService.addPersonEntityData, payload);
    yield put(createPersonEntitySuccess(sizeEntityData));
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(createPersonEntityFail('Network error'));
      return;
    }
    yield put(createPersonEntityFail(err.response.data.message));
  }
}

function* updatePersonEntity({ payload }: ReturnType<typeof updatePersonEntityRequest>) {
  try {
    yield call(PersonsDataService.updatePersonEntityData, payload);
    yield put(updatePersonEntitySuccess());
    yield put(setTableMode({
      mode: TABLE_MODE,
      category: '',
      id: 0,
    }));
  } catch (err) {
    if (!err.response) {
      yield put(updatePersonEntityFail('Network error'));
      return;
    }
    yield put(updatePersonEntityFail(err.response.data.message));
  }
}

function* deletePersonEntity({ id, role }: ReturnType<typeof deletePersonEntityRequest>) {
  try {
    yield call(PersonsDataService.deletePersonEntityData, id);
    yield put(deletePersonEntitySuccess());
    yield put(clearPersonsDataState());
    yield put(getPersonsRequest(role));
  } catch (err) {
    if (!err.response) {
      yield put(deletePersonEntityFail('Network error'));
      return;
    }
    yield put(deletePersonEntityFail(err.response.data.message));
  }
}

const userDataSaga = all([
  takeLatest(GET_PERSONS_REQUEST, getPersons),
  takeLatest(GET_PERSON_ENTITY_REQUEST, getPersonEntity),
  takeLatest(UPDATE_PERSON_ENTITY_REQUEST, updatePersonEntity),
  takeLatest(CREATE_PERSON_ENTITY_REQUEST, addPersonEntity),
  takeLatest(DELETE_PERSON_ENTITY_REQUEST, deletePersonEntity),
]);

export default userDataSaga;
