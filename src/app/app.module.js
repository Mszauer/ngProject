"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar.component");
var home_component_1 = require("./home.component");
var not_found_component_1 = require("./not-found.component");
var users_module_1 = require("./users/users.module");
var posts_module_1 = require("./posts/posts.module");
var users_routing_1 = require("./users/users.routing");
var app_routing_1 = require("./app.routing");
var posts_routing_1 = require("./posts/posts.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule,
            users_module_1.UsersModule, posts_module_1.PostsModule,
            users_routing_1.usersRouting, posts_routing_1.postsRouting, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent,
            not_found_component_1.NotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map