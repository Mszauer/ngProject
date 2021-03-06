"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var shared_module_1 = require("../shared/shared.module");
var posts_component_1 = require("./posts.component");
var posts_service_1 = require("./posts.service");
var user_service_1 = require("../users/user.service");
var PostsModule = (function () {
    function PostsModule() {
    }
    return PostsModule;
}());
PostsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, shared_module_1.SharedModule],
        providers: [posts_service_1.PostsService, user_service_1.UsersService],
        declarations: [posts_component_1.PostsComponent],
        exports: [posts_component_1.PostsComponent]
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map