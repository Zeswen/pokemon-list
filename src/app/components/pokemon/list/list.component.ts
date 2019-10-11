import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { PokemonState } from '../../../store/reducers/pokemon.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnDestroy {
  pokemon: PokemonState;
  onDestroy: Subject<void> = new Subject<void>();

  constructor(private store: Store<{ pokemon: PokemonState }>) {
    this.store
      .pipe(select('pokemon'))
      .subscribe((pokemon: PokemonState) => (this.pokemon = pokemon));
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
