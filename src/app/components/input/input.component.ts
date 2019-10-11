import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../store/reducers/pokemon.reducer';
import { getPokemon } from '../../store/actions/pokemon.actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  pokemonId;

  constructor(private store: Store<{ pokemon: PokemonState }>) {}

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch(getPokemon({payload: this.pokemonId}));
  }
}
