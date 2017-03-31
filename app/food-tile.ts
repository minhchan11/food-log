import { Food } from './model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FOODS } from './all-food';

@Component({
  selector: 'food-tile',
  templateUrl: './app/food-tile.html'
})

export class FoodTileComponent{
  @Input() foods: Food[];
  @Output() removeSend = new EventEmitter();
  removeFood(food)
  {
    this.removeSend.emit(food);
  }
}
