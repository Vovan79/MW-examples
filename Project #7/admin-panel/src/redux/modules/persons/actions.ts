import {
  PersonData,
  GET_PERSONS_REQUEST,
  GET_PERSONS_SUCCESS,
  GET_PERSONS_FAIL,
  GET_PERSON_ENTITY_REQUEST,
  GET_PERSON_ENTITY_SUCCESS,
  GET_PERSON_ENTITY_FAIL,
  UPDATE_PERSON_ENTITY_REQUEST,
  UPDATE_PERSON_ENTITY_SUCCESS,
  UPDATE_PERSON_ENTITY_FAIL,
  CREATE_PERSON_ENTITY_REQUEST,
  CREATE_PERSON_ENTITY_SUCCESS,
  CREATE_PERSON_ENTITY_FAIL,
  DELETE_PERSON_ENTITY_REQUEST,
  DELETE_PERSON_ENTITY_SUCCESS,
  DELETE_PERSON_ENTITY_FAIL,
  CLEAR_PERSONS_DATA_STATE,
  CLEAR_PERSON_ENTITY_STATE,
} from './types';

// PERSONS
export const getPersonsRequest = (payload: string) => ({
  type: GET_PERSONS_REQUEST,
  payload,
}) as const;

export const getPersonsSuccess = (payload: PersonData[]) => ({
  type: GET_PERSONS_SUCCESS,
  payload,
}) as const;

export const getPersonsFail = (payload: string) => ({
  type: GET_PERSONS_FAIL,
  payload,
}) as const;

export const getPersonEntityRequest = (payload: number) => ({
  type: GET_PERSON_ENTITY_REQUEST,
  payload,
}) as const;

export const getPersonEntitySuccess = (payload: PersonData) => ({
  type: GET_PERSON_ENTITY_SUCCESS,
  payload,
}) as const;

export const getPersonEntityFail = (payload: string) => ({
  type: GET_PERSON_ENTITY_FAIL,
  payload,
}) as const;

export const updatePersonEntityRequest = (payload: PersonData) => ({
  type: UPDATE_PERSON_ENTITY_REQUEST,
  payload,
}) as const;

export const updatePersonEntitySuccess = () => ({
  type: UPDATE_PERSON_ENTITY_SUCCESS,
}) as const;

export const updatePersonEntityFail = (payload: string) => ({
  type: UPDATE_PERSON_ENTITY_FAIL,
  payload,
}) as const;

export const createPersonEntityRequest = (payload: PersonData) => ({
  type: CREATE_PERSON_ENTITY_REQUEST,
  payload,
}) as const;

export const createPersonEntitySuccess = (payload: PersonData) => ({
  type: CREATE_PERSON_ENTITY_SUCCESS,
  payload,
}) as const;

export const createPersonEntityFail = (payload: string) => ({
  type: CREATE_PERSON_ENTITY_FAIL,
  payload,
}) as const;

export const deletePersonEntityRequest = (id: number, role: string) => ({
  type: DELETE_PERSON_ENTITY_REQUEST,
  id,
  role,
}) as const;

export const deletePersonEntitySuccess = () => ({
  type: DELETE_PERSON_ENTITY_SUCCESS,
}) as const;

export const deletePersonEntityFail = (payload: string) => ({
  type: DELETE_PERSON_ENTITY_FAIL,
  payload,
}) as const;

export const clearPersonsDataState = () => ({
  type: CLEAR_PERSONS_DATA_STATE,
}) as const;

export const clearPersonEntityState = () => ({
  type: CLEAR_PERSON_ENTITY_STATE,
}) as const;

export type personsActionsTypes = ReturnType<typeof getPersonsRequest>
| ReturnType<typeof getPersonsSuccess>
| ReturnType<typeof getPersonsFail>
| ReturnType<typeof getPersonEntityRequest>
| ReturnType<typeof getPersonEntitySuccess>
| ReturnType<typeof getPersonEntityFail>
| ReturnType<typeof updatePersonEntityRequest>
| ReturnType<typeof updatePersonEntitySuccess>
| ReturnType<typeof updatePersonEntityFail>
| ReturnType<typeof createPersonEntityRequest>
| ReturnType<typeof createPersonEntitySuccess>
| ReturnType<typeof createPersonEntityFail>
| ReturnType<typeof deletePersonEntityRequest>
| ReturnType<typeof deletePersonEntitySuccess>
| ReturnType<typeof deletePersonEntityFail>
| ReturnType<typeof clearPersonsDataState>
| ReturnType<typeof clearPersonEntityState>;
