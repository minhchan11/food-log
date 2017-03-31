import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './model';

@Pipe({
    name: "calorie",
    pure: false
})

export class CaloriePipe implements PipeTransform {
    transform(input: Food[], calorieCount) {
        var output: Food[] = [];
        if (calorieCount === "high") {
            for (let i = 0; i < input.length; i++) {
                if (input[i].calories > 500) {
                    output.push(input[i]);
                };
            }
            return output;
        } else if (calorieCount === "low") {
            for (let i = 0; i < input.length; i++) {
                if (input[i].calories <= 500) {
                    output.push(input[i]);
                };
            }
            return output;
        } else {
            return input;
        }
    }
}
