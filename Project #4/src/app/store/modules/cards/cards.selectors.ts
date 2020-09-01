import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getAll, getErrors, getStatus } from '../../helpers/adapters';
import { ICardsReducerState } from './cards.types';

export const selectCardsState = createFeatureSelector<ICardsReducerState>('cards');

export const selectCards = createSelector(
  selectCardsState,
  getAll
);

export const selectCardsEntities = createSelector(
  selectCardsState,
  (state: any) => state.entities
);

export const selectCardsStatus = createSelector(
  selectCardsState,
  getStatus
);

export const selectCardsErrors = createSelector(
  selectCardsState,
  getErrors
);
