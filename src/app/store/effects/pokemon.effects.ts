import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonActionTypes } from '../actions/pokemon.actions';
import { EMPTY } from 'rxjs';

@Injectable()
export class PokemonEffects {
  getPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionTypes.GET_POKEMON),
      mergeMap(() =>
        this.pokemonService.getPokemon(1).pipe(
          map(pokemon => ({
            type: PokemonActionTypes.LOAD_POKEMON,
            payload: pokemon
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
