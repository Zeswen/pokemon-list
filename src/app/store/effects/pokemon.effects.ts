import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonActionTypes } from '../actions/pokemon.actions';
import { EMPTY } from 'rxjs';
import { capitalize } from '../../utils/index';

@Injectable()
export class PokemonEffects {
  getPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionTypes.GET_POKEMON),
      mergeMap(({ payload: pokemonId }: any) => {
        return this.pokemonService.getPokemon(pokemonId).pipe(
          map((pokemon: any) => ({
            type: PokemonActionTypes.LOAD_POKEMON,
            payload: {
              name: capitalize(pokemon.name),
              id: pokemon.id,
              sprites: pokemon.sprites
            }
          })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
