import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { PokemonState, pokemonReducer } from './pokemon.reducer';

export interface State {
  pokemon: PokemonState;
}

export const reducers: ActionReducerMap<State> = {
  pokemon: pokemonReducer
};

export const logger = (reducer: ActionReducer<State>): ActionReducer<State> => (
  state: State,
  action: any
): State => {
  console.log({ state });
  console.log({ action });
  return reducer(state, action);
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
