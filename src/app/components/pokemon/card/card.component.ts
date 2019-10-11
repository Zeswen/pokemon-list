import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  sprite = 'front_default';

  constructor() {}

  ngOnInit() {}

  toggleFace() {
    const splitNewSprite = this.sprite.split('_');
    if (splitNewSprite[0] === 'front') {
      splitNewSprite[0] = 'back';
    } else if (splitNewSprite[0] === 'back') {
      splitNewSprite[0] = 'front';
    }
    this.sprite = splitNewSprite.join('_');
  }

  toggleShiny() {
    const splitNewSprite = this.sprite.split('_');
    if (splitNewSprite[1] === 'default') {
      splitNewSprite[1] = 'shiny';
    } else if (splitNewSprite[1] === 'shiny') {
      splitNewSprite[1] = 'default';
    }
    this.sprite = splitNewSprite.join('_');
  }
}
