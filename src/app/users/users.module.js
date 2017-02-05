"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var users_component_1 = require("./users.component");
var user_form_component_1 = require("./user-form.component");
var user_service_1 = require("./user.service");
var dirty_tracking_service_1 = require("../dirty-tracking.service");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule],
        providers: [user_service_1.UsersService, dirty_tracking_service_1.DirtyTracking],
        declarations: [
            users_component_1.UsersComponent, user_form_component_1.UserFormComponent
        ],
        exports: [
            users_component_1.UsersComponent, user_form_component_1.UserFormComponent
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map