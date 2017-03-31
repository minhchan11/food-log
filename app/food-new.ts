import { Component, Output, EventEmitter } from "@angular/core";
import { Food } from './model';
declare var $:any;

@Component({
    selector: 'food-new',
    templateUrl: './app/food-new.html'
})

export class FoodNewComponent {
    @Output() submitSend = new EventEmitter();

    submit(name: string, details: string, calories: number) {
        var newFood = new Food(name, details, calories);
        this.submitSend.emit(newFood);
        $("#name, #detail, #calories").val('');
    }
}
