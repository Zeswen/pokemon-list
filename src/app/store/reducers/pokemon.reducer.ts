import { Pokemon } from '../../models/pokemon.model';
import { createReducer, on } from '@ngrx/store';

export interface PokemonState {
  [x: number]: Pokemon;
}

export const initialState: PokemonState = [
  {
    id: 1,
    name: 'Bulbasur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  },
  {
    id: 2,
    name: 'Ivysaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
  },
  {
    id: 3,
    name: 'Venusaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
  }
];

export const pokemonReducer = createReducer(initialState);
