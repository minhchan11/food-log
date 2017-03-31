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
var core_1 = require('@angular/core');
var FoodTileComponent = (function () {
    function FoodTileComponent() {
        this.removeSend = new core_1.EventEmitter();
        this.filterByCalorie = "all";
    }
    FoodTileComponent.prototype.removeFood = function (food) {
        this.removeSend.emit(food);
    };
    FoodTileComponent.prototype.onChange = function (option) {
        this.filterByCalorie = option;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FoodTileComponent.prototype, "foods", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodTileComponent.prototype, "removeSend", void 0);
    FoodTileComponent = __decorate([
        core_1.Component({
            selector: 'food-tile',
            templateUrl: './app/food-tile.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FoodTileComponent);
    return FoodTileComponent;
}());
exports.FoodTileComponent = FoodTileComponent;
//# sourceMappingURL=food-tile.js.map