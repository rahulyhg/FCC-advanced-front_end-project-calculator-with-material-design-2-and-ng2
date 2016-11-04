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
var $ = require('jquery');
var AppComponent = (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
        this.values = [];
    }
    AppComponent.prototype.handleClick = function (id) {
        var target = $(this.elRef.nativeElement).find("#" + id);
        console.log(target.val());
        this.values.push(target.val());
    };
    AppComponent.prototype.processMath = function (numArray) {
        var total = numArray.join('');
        console.log(total);
        console.log('sum is: ', eval(total), 'typeof: ', typeof eval(total));
    };
    AppComponent.prototype.clearProcess = function () {
        var userChoice;
        userChoice = confirm('are you sure you want to clear the arithmetic?');
        // userChoice ? this.values = [] : console.log('denied reset per user');
        if (userChoice) {
            this.values = [];
            console.log('values cleared');
        }
        else {
            console.log('clear function denied by user');
            return;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'app.component.html',
            selector: 'app-root',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map