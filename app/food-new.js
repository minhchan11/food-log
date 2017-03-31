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
var core_1 = require("@angular/core");
var model_1 = require('./model');
var FoodNewComponent = (function () {
    function FoodNewComponent() {
        this.submitSend = new core_1.EventEmitter();
    }
    FoodNewComponent.prototype.submit = function (name, details, calories) {
        var newFood = new model_1.Food(name, details, calories);
        this.submitSend.emit(newFood);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FoodNewComponent.prototype, "submitSend", void 0);
    FoodNewComponent = __decorate([
        core_1.Component({
            selector: 'food-new',
            templateUrl: './app/food-new.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FoodNewComponent);
    return FoodNewComponent;
}());
exports.FoodNewComponent = FoodNewComponent;
//# sourceMappingURL=food-new.js.map