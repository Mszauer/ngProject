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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var UserFormComponent = (function () {
    function UserFormComponent(fb, _usersService, _router, _route) {
        this._usersService = _usersService;
        this._router = _router;
        this._route = _route;
        this.emailPattern = "";
        this.user = new user_1.User();
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: ['']
            })
        });
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.userId = params["id"];
        });
        this.title = this.userId ? "Edit User" : "New User";
        if (!this.userId) {
            return;
        }
        this._usersService.getUser(this.userId)
            .subscribe(function (res) { return _this.user = res; }, function (response) {
            if (response.status == 404) {
                _this._router.navigate(['NotFound']);
            }
        });
    };
    UserFormComponent.prototype.onSubmit = function (user) {
        if (!this.userId) {
            this.onAddUser(this.user);
        }
        else {
            this.onEditUser(this.user);
        }
    };
    UserFormComponent.prototype.onAddUser = function (user) {
        var _this = this;
        this._usersService.createUser(user)
            .subscribe(function (res) {
            _this.form.markAsPristine();
            _this._router.navigate(['users']);
        });
    };
    UserFormComponent.prototype.onEditUser = function (user) {
        var _this = this;
        this._usersService.editUser(this.userId, user)
            .subscribe(function (res) {
            _this.form.markAsPristine();
            _this._router.navigate(['users']);
        });
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Users/user-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UsersService,
        router_1.Router, router_1.ActivatedRoute])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map