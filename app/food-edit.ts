import { Food } from "./model";
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'food-edit',
    templateUrl: './app/food-edit.html'
})

export class FoodEditComponent {
    @Input() food: Food;
    @Output() removeSend = new EventEmitter();
    removeFood(food) {
        this.removeSend.emit(food);
    }
}
