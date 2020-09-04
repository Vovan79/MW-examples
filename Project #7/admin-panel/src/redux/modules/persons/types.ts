// import { UserData } from '../../../services/UserData';

export enum RequestName {
  GET_PERSONS = 'GET PERSONS',
  GET_PERSON_ENTITY = 'GET PERSON ENTITY',
  UPDATE_PERSON_ENTITY = 'UPDATE PERSON ENTITY',
  CREATE_PERSON_ENTITY = 'CREATE PERSON ENTITY',
  DELETE_PERSON_ENTITY = 'DELETE PERSON ENTITY',
}

export type RequestError = {
  requestName: RequestName,
  error: string,
};

export type UserRole = {
  createdAt: string,
  id: number,
  name: 'guest' | 'user' | 'designer' | 'admin',
};

export type UserImage = {
  createdAt: string,
  id: number,
  link: string,
  userId: number,
};

export type UserFont = {
  createdAt: string,
  id: number,
  link: string,
  userId: number,
};

export type UserColor = {
  createdAt: string,
  id: number,
  color: string,
  userId: number,
};

export type UserDesign = {
  createdAt: string,
  updatedAt: string,
  id: number,
  name: string,
  design: string,
  preview: string,
  userId: number,
};

export type PersonData = {
  id?: number,
  username?: string,
  role?: UserRole['name'],
  roleId?: UserRole['id'],
  firstname: string,
  lastname: string,
  jobtitle: string,
  businessname: string,
  phone: string,
  mobile: string,
  address: string,
  suburb: string,
  state: string,
  postcode: string,
  website: string,
  email: string,
  socialmedia: string,
  images?: UserImage[],
  fonts?: UserFont[],
  colors?: UserColor[],
  designs?: UserDesign[],
  userRole?: UserRole,
  planId: number,
  planStarted: string,
};


export type PersonsDataState = {
  persons: PersonData[],
  details: PersonData | null,
  loadingRequests: RequestName[],
  requestErrors: RequestError[],
};

export const GET_PERSONS_REQUEST = 'GET PERSONS REQUEST';
export const GET_PERSONS_SUCCESS = 'GET PERSONS SUCCESS';
export const GET_PERSONS_FAIL = 'GET PERSONS FAIL';
export const GET_PERSON_ENTITY_REQUEST = 'GET PERSON ENTITY REQUEST';
export const GET_PERSON_ENTITY_SUCCESS = 'GET PERSON ENTITY SUCCESS';
export const GET_PERSON_ENTITY_FAIL = 'GET PERSON ENTITY FAIL';
export const UPDATE_PERSON_ENTITY_REQUEST = 'UPDATE PERSON ENTITY REQUEST';
export const UPDATE_PERSON_ENTITY_SUCCESS = 'UPDATE PERSON ENTITY SUCCESS';
export const UPDATE_PERSON_ENTITY_FAIL = 'UPDATE PERSON ENTITY FAIL';
export const CREATE_PERSON_ENTITY_REQUEST = 'CREATE PERSON ENTITY REQUEST';
export const CREATE_PERSON_ENTITY_SUCCESS = 'CREATE PERSON ENTITY SUCCESS';
export const CREATE_PERSON_ENTITY_FAIL = 'CREATE PERSON ENTITY FAIL';
export const DELETE_PERSON_ENTITY_REQUEST = 'DELETE PERSON ENTITY REQUEST';
export const DELETE_PERSON_ENTITY_SUCCESS = 'DELETE PERSON ENTITY SUCCESS';
export const DELETE_PERSON_ENTITY_FAIL = 'DELETE PERSON ENTITY FAIL';
export const CLEAR_PERSONS_DATA_STATE = 'CLEAR PERSONS DATA STATE';
export const CLEAR_PERSON_ENTITY_STATE = 'CLEAR PERSON ENTITY STATE';
