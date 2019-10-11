import { createAction, props } from '@ngrx/store';

export enum PokemonActionTypes {
  GET_POKEMON = '[Pokemon] GET_POKEMON',
  LOAD_POKEMON = '[Pokemon] LOAD_POKEMON'
}

export const getPokemon = createAction(
  PokemonActionTypes.GET_POKEMON,
  props<{ payload: any }>()
);
export const loadPokemon = createAction(
  PokemonActionTypes.LOAD_POKEMON,
  props<{ payload: any }>()
);
