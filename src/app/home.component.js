"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: "\n        <div class='col-xs-3'></div>\n        <div class='well text-center col-xs-6'>\n            <h1> Home </h1>\n            <p>\n                Hello! This angular2 application uses <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>.\n            </p>\n            <p>\n                What is JSONPlaceholder;\n            </p>            \n            <blockquote cite='https://jsonplaceholder.typicode.com/'>\n                \"JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.\n                It's great for tutorials, faking a server, sharing code examples, ...\"\n            </blockquote>\n            <p> \n                What this means is while this application is not connected to a real server, all functions are created in a way\n                that easily mimics a server endpoint. All that would need to be changed is the destination along with very minor \n                refactoring.\n            </p>\n            <p>\n                If you open the developer tools inside your browser, under the networks tab you will see these calls\n            </p>\n        </div>\n        <div class='col-xs-3'></div>\n    "
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map