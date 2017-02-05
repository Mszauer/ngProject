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
var user_service_1 = require("./user.service");
var router_1 = require("@angular/router");
var UsersComponent = (function () {
    function UsersComponent(_usersService, _router) {
        var _this = this;
        this._usersService = _usersService;
        this._router = _router;
        this.users = [];
        this._usersService.getUsers()
            .subscribe(function (res) {
            _this.users = res;
        });
    }
    UsersComponent.prototype.onRemoveUser = function (user) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._usersService.destroyUser(user.id)
                .subscribe(null, function (err) {
                alert("Could not delete the user.");
                _this.users.splice(index, 0, user);
            });
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Users/users.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UsersService, router_1.Router])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map