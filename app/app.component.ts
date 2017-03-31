import { Component } from '@angular/core';
import { Food } from './model';
import { FOODS } from './all-food';


@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html'
})

export class AppComponent {
    foods = FOODS;

    removeFood(food) {
      FOODS.splice(FOODS.indexOf(food),1);
    }

    submit(food) {
      FOODS.push(food);
    }
}
