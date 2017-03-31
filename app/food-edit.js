"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var model_1 = require("./model");
var core_1 = require('@angular/core');
var FoodEditComponent = (function () {
    function FoodEditComponent() {
        this.removeSend = new core_1.EventEmitter();
    }
    FoodEditComponent.prototype.removeFood = function (food) {
        this.removeSend.emit(food);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', model_1.Food)
    ], FoodEditComponent.prototype, "food", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodEditComponent.prototype, "removeSend", void 0);
    FoodEditComponent = __decorate([
        core_1.Component({
            selector: 'food-edit',
            templateUrl: './app/food-edit.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FoodEditComponent);
    return FoodEditComponent;
}());
exports.FoodEditComponent = FoodEditComponent;
//# sourceMappingURL=food-edit.js.map