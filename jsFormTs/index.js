"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
这是装饰器工厂 return function
*/
function logClass(params) {
    return function (that) {
        console.log("\u8FD9\u662F\u88C5\u9970\u5668\u4F20\u53C2" + params);
        console.log(that); //这个是装饰器传入的对象
    };
}
var Learn = /** @class */ (function () {
    function Learn() {
    }
    Learn = __decorate([
        logClass('hello world')
    ], Learn);
    return Learn;
}());
var arr1 = ['1', '2', 3];
var arr2 = ['1', '2', 3];
