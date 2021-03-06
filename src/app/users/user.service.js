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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._url = 'http://jsonplaceholder.typicode.com/users/';
    }
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._url) //get the url as observable
            .map(function (res) { return res.json(); }); //convert observable into JSON
    };
    UsersService.prototype.getUser = function (userId) {
        return this._http.get(this._url + userId)
            .map(function (res) { return res.json(); }); //
    };
    UsersService.prototype.createUser = function (form) {
        return this._http.post(this._url, JSON.stringify(form)) //post stringified parameter to url
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.editUser = function (userId, form) {
        return this._http.put(this._url + userId, JSON.stringify(form))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.destroyUser = function (userId) {
        return this._http.delete(this._url + userId)
            .map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map