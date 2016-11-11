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
    AppComponent.prototype.clearProcess = function () {
        var target = $(this.elRef.nativeElement)
            .find('.output');
        target.html('');
        this.values = [];
    };
    AppComponent.prototype.handleClick = function (id) {
        var target = $(this.elRef.nativeElement).find("#" + id);
        console.log('value is: ', target.val());
        this.values.push(target.val());
    };
    AppComponent.prototype.processMath = function (numArray) {
        var target = $(this.elRef.nativeElement)
            .find('.output');
        var total = numArray.join('');
        // let result = eval(total);
        var result = eval(total);
        if (result === Infinity) {
            alert('you divided by zero!');
            alert('clear the screen and try again');
            target.html("Infinity");
        }
        else {
            target.html(eval(result));
            this.values = [Number(result)];
            return eval(result);
        }
    };
    AppComponent.prototype.getPi = function () {
        return Math.PI;
    };
    AppComponent.prototype.addHtml = function (param) {
        var target = $(this.elRef.nativeElement)
            .find('.output');
        target.append(param + ' ');
    };
    AppComponent.prototype.convertPercent = function () {
        var target = $(this.elRef.nativeElement)
            .find('.output');
        var num = Number(this.values.join(''));
        target.html("" + eval(num / 100));
    };
    AppComponent.prototype.clearSingle = function () {
        var target = $(this.elRef.nativeElement)
            .find('.output');
        this.values.pop();
        target.html("" + this.values.join(''));
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