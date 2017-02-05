webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(147);
__webpack_require__(378);
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
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var posts_service_1 = __webpack_require__(337);
var user_service_1 = __webpack_require__(107);
var _ = __webpack_require__(695);
var PostsComponent = (function () {
    function PostsComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
        this.comments = [];
        this.users = [];
        this.posts = [];
        this.pagedPosts = [];
        this.pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.loadPosts();
        this.loadUsers();
    };
    PostsComponent.prototype.loadPosts = function (filter) {
        var _this = this;
        this.postsLoading = true;
        this._postsService.getPosts(filter)
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.pagedPosts = _.take(_this.posts, _this.pageSize);
        }, null, function () { _this.postsLoading = false; });
    };
    PostsComponent.prototype.loadUsers = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        }, null, function () { });
    };
    PostsComponent.prototype.onSelectPost = function (post) {
        var _this = this;
        this.selectedPost = post;
        this.commentsLoading = true;
        this._postsService.getComments(post.id)
            .subscribe(function (comments) {
            _this.comments = comments;
        }, null, function () { _this.commentsLoading = false; });
    };
    PostsComponent.prototype.onSelectUser = function (filter) {
        this.selectedPost = null;
        this.loadPosts(filter);
    };
    PostsComponent.prototype.onPageChanged = function (page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    };
    PostsComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(676)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof posts_service_1.PostsService !== 'undefined' && posts_service_1.PostsService) === 'function' && _a) || Object, (typeof (_b = typeof user_service_1.UsersService !== 'undefined' && user_service_1.UsersService) === 'function' && _b) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a, _b;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DirtyTracking = (function () {
    function DirtyTracking() {
    }
    DirtyTracking.prototype.canDeactivate = function (component) {
        if (component.form.dirty) {
            return confirm("You have unsaved changes. \n Are you sure you want to leave?");
        }
        return true;
    };
    return DirtyTracking;
}());
exports.DirtyTracking = DirtyTracking;
//# sourceMappingURL=dirty-tracking.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n        <div class='col-xs-3'></div>\n        <div class='well text-center col-xs-6'>\n            <h1> Home </h1>\n            <p>\n                Hello! This angular2 application uses <a href='https://jsonplaceholder.typicode.com/'>JSONPlaceholder</a>.\n            </p>\n            <p>\n                What is JSONPlaceholder;\n            </p>            \n            <blockquote cite='https://jsonplaceholder.typicode.com/'>\n                \"JSONPlaceholder is a free online REST service that you can use whenever you need some fake data.\n                It's great for tutorials, faking a server, sharing code examples, ...\"\n            </blockquote>\n            <p> \n                What this means is while this application is not connected to a real server, all functions are created in a way\n                that easily mimics a server endpoint. All that would need to be changed is the destination along with very minor \n                refactoring.\n            </p>\n            <p>\n                If you open the developer tools inside your browser, under the networks tab you will see these calls\n            </p>\n        </div>\n        <div class='col-xs-3'></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        core_1.Component({
            template: "\n        <h1> Not Found </h1>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(147);
__webpack_require__(378);
var PostsService = (function () {
    function PostsService(_http) {
        this._http = _http;
        this._url = 'http://jsonplaceholder.typicode.com/posts';
    }
    PostsService.prototype.getPosts = function (filter) {
        var url = this._url;
        if (filter && filter.userId) {
            url += "?userId=" + filter.userId;
        }
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getComments = function (postId) {
        var urlEnd = "/" + postId + "/comments";
        return this._http.get(this._url + urlEnd)
            .map(function (res) { return res.json(); });
    };
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(305);
var router_1 = __webpack_require__(78);
var user_service_1 = __webpack_require__(107);
var user_1 = __webpack_require__(518);
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
    UserFormComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(677)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof user_service_1.UsersService !== 'undefined' && user_service_1.UsersService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object])
    ], UserFormComponent);
    return UserFormComponent;
    var _a, _b, _c, _d;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var user_service_1 = __webpack_require__(107);
var router_1 = __webpack_require__(78);
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
    UsersComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(678)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.UsersService !== 'undefined' && user_service_1.UsersService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__(480);
var core_1 = __webpack_require__(0);
var environment_1 = __webpack_require__(521);
var app_module_1 = __webpack_require__(510);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <navbar></navbar>\n  \n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(151);
var http_1 = __webpack_require__(147);
var app_component_1 = __webpack_require__(509);
var navbar_component_1 = __webpack_require__(512);
var home_component_1 = __webpack_require__(335);
var not_found_component_1 = __webpack_require__(336);
var users_module_1 = __webpack_require__(519);
var posts_module_1 = __webpack_require__(513);
var users_routing_1 = __webpack_require__(520);
var app_routing_1 = __webpack_require__(511);
var posts_routing_1 = __webpack_require__(514);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule,
                users_module_1.UsersModule, posts_module_1.PostsModule,
                users_routing_1.usersRouting, posts_routing_1.postsRouting, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, home_component_1.HomeComponent,
                not_found_component_1.NotFoundComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(78);
var home_component_1 = __webpack_require__(335);
var posts_component_1 = __webpack_require__(217);
var users_component_1 = __webpack_require__(339);
var not_found_component_1 = __webpack_require__(336);
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'NotFound', component: not_found_component_1.NotFoundComponent },
    { path: '**', redirectTo: '' }
]);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: __webpack_require__(675)
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(59);
var http_1 = __webpack_require__(147);
var shared_module_1 = __webpack_require__(516);
var posts_component_1 = __webpack_require__(217);
var posts_service_1 = __webpack_require__(337);
var user_service_1 = __webpack_require__(107);
var PostsModule = (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, shared_module_1.SharedModule],
            providers: [posts_service_1.PostsService, user_service_1.UsersService],
            declarations: [posts_component_1.PostsComponent],
            exports: [posts_component_1.PostsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(78);
var posts_component_1 = __webpack_require__(217);
exports.postsRouting = router_1.RouterModule.forChild([
    { path: 'posts', component: posts_component_1.PostsComponent }
]);
//# sourceMappingURL=posts.routing.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.items = [];
        this.pageSize = 10;
        this.pageChanged = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        var pagesCount = this.items.length / this.pageSize;
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++) {
            this.pages.push(i);
        }
    };
    PaginationComponent.prototype.onChangePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    };
    PaginationComponent.prototype.onPrevious = function () {
        if (this.currentPage == 1) {
            return;
        }
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.onNext = function () {
        if (this.currentPage == this.pages.length) {
            return;
        }
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input('page-size'), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Output('page-changed'), 
        __metadata('design:type', Object)
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: "\n        <nav *ngIf=\"items.length > pageSize\">\n            <ul class=\"pagination\">\n                <li [class.disabled]=\"currentPage ==1\">\n                    <a (click)=\"onPrevious()\" aria-label=\"Previous\">\n                        <span aria-hidden=\"true\">&laquo;</span>\n                    </a>\n                </li>\n                <li [class.active]=\"currentPage == page\" *ngFor=\"let page of pages\" \n                    (click)=\"onChangePage(page)\">\n                    <a> {{ page }} </a>\n                </li>\n                <li [class.disabled]=\"currentPage == pages.length\">\n                    <a  (click)=\"onNext()\" aria-label=\"Next\">\n                        <span aria-hidden=\"true\">&raquo;</span>\n                    </a>\n                </li>\n            </ul>\n        </nav>    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(59);
var pagination_component_1 = __webpack_require__(515);
var spinner_component_1 = __webpack_require__(517);
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                pagination_component_1.PaginationComponent,
                spinner_component_1.SpinnerComponent
            ],
            exports: [
                pagination_component_1.PaginationComponent,
                spinner_component_1.SpinnerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.visible = true;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SpinnerComponent.prototype, "visible", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            selector: "spinner",
            template: "<i class=\"fa fa-spinner fa-spin fa-3x\" *ngIf='visible'></i>"
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Address = (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var User = (function () {
    function User() {
        this.address = new Address();
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(59);
var forms_1 = __webpack_require__(305);
var router_1 = __webpack_require__(78);
var users_component_1 = __webpack_require__(339);
var user_form_component_1 = __webpack_require__(338);
var user_service_1 = __webpack_require__(107);
var dirty_tracking_service_1 = __webpack_require__(334);
var UsersModule = (function () {
    function UsersModule() {
    }
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
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(78);
var user_form_component_1 = __webpack_require__(338);
var dirty_tracking_service_1 = __webpack_require__(334);
exports.usersRouting = router_1.RouterModule.forChild([
    { path: 'users/new', component: user_form_component_1.UserFormComponent,
        canDeactivate: [dirty_tracking_service_1.DirtyTracking] },
    { path: 'users/edit/:id', component: user_form_component_1.UserFormComponent,
        canDeactivate: [dirty_tracking_service_1.DirtyTracking] }
]);
//# sourceMappingURL=users.routing.js.map

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink='' routerLinkActive='active'>ngProject</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink='users' routerLinkActive='active'>Users</a></li>\r\n        <li><a routerLink='posts' routerLinkActive='active'>Posts</a></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n</nav>"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class='text-center'>Posts</h1>\r\n    <select class=\"form-control col-sm-6\" (change)=\"onSelectUser({ userId: u.value })\" #u>\r\n        <option selected disabled> Select a user...</option>\r\n        <option value=\"\"> All Posts</option>\r\n        <option *ngFor='let user of users' value=\"{{ user.id }}\">\r\n            {{ user.name }}\r\n        </option>\r\n    </select>\r\n    <spinner [visible]='postsLoading'></spinner>\r\n    <pagination [items]=\"posts\" (page-changed)=\"onPageChanged($event)\"></pagination>\r\n    <ul class=\"list-group col-sm-6\">\r\n        <li class=\"list-group-item post\" *ngFor='let post of pagedPosts' \r\n            id='post.id' (click)='onSelectPost(post)' [class.active]='selectedPost == post'>\r\n            {{ post.title }}\r\n        </li>\r\n    </ul>\r\n    <div class=\"panel panel-default pull-right col-sm-5\" *ngIf='selectedPost'>\r\n        <div class=\"panel-heading\" >\r\n            <h3 class=\"panel-title\"> {{ selectedPost.title }} </h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            {{ selectedPost.body }}\r\n            <hr/>\r\n            <spinner [visible]='commentsLoading'></spinner>\r\n            <div class=\"media\" *ngFor='let comment of comments'>\r\n                <div class=\"media-left\">\r\n                    <a href=\"#\">\r\n                    <img class=\"media-object\" src=\"http://lorempixel.com/80/80/people?random={{ comment.id }}\"\r\n                         alt=\"Picture from lorempixel\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"media-body\">\r\n                    <h4 class=\"media-heading\">{{ comment.name }}</h4>\r\n                    {{ comment.body }}\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\n    <div class=\"col-md-6 well\">\n        <h1 class=\"text-center\">{{ title }}</h1>\n        <form [formGroup]='form' \n              (ngSubmit)='onSubmit(form.value)'>\n            <fieldset>\n                <legend class=\"text-center\">User</legend>\n                <div class=\"form-group\">\n                    <label>Name: </label>\n                    <input formControlName='name' id='name'\n                            type=\"text\" class=\"form-control\" \n                            [(ngModel)]=\"user.name\" required>\n                    <div *ngIf='form.controls.name.touched \n                                && form.controls.name.errors'>\n                            <div *ngIf='form.controls.name.errors.required'\n                                    class=\"alert alert-danger\">\n                                Name is required.\n                            </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label >Email: </label>\n                    <input formControlName=\"email\" id='email'\n                            type=\"text\" class=\"form-control\" \n                            [(ngModel)]=\"user.email\"\n                            required>\n                    <div *ngIf='form.controls.email.touched\n                                && form.controls.email.errors'>\n                        <div *ngIf='form.controls.email.errors.required'\n                                class=\"alert alert-danger\">\n                            A valid Email is required.\n                        </div>                       \n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Phone: </label>\n                    <input formControlName=\"phone\" id=\"phone\"\n                            type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"user.phone\">\n                </div>\n            </fieldset>\n            <fieldset formArrayName=\"address\">\n                <legend class=\"text-center\">Address</legend>\n                <div class=\"form-group\">\n                    <label>Street: </label>\n                    <input formControlName=\"street\" id=\"street\"\n                            type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"user.address.street\">\n                </div>\n                <div class=\"form-group\">\n                    <label >Suite: </label>\n                    <input formControlName=\"suite\" id=\"suite\"\n                            type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"user.address.suite\">\n                </div>\n                <div class=\"form-group\">\n                    <label>City: </label>\n                    <input formControlName=\"city\" id=\"city\"\n                            type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"user.address.city\">\n                </div>\n                <div class=\"form-group\">\n                    <label>ZipCode: </label>\n                    <input formControlName=\"zipcode\" id=\"zipcode\"\n                            type=\"text\" class=\"form-control\"\n                            [(ngModel)]=\"user.address.zipcode\">\n                </div>\n                <div *ngIf='!form.valid' class='alert alert-danger'>\n                    Please make sure the form is filled out completely.\n                </div>\n                <button class='btn btn-primary' type='submit' [disabled]='!form.valid'\n                        >Submit</button>\n            </fieldset>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n    <h1> Users</h1>\n    <a href=\"users/new\" class=\"btn btn-primary\">Add New User</a>\n</div>\n<table class=\"table table-bordered\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Email</th>\n            <th>Edit</th>\n            <th>Delete</th>\n        </tr>\n    </thead>\n    <tbody *ngFor= \"let user of users\" >\n        <tr>\n            <td> {{ user.name }}</td>\n            <td> {{ user.email }}</td>\n            <td><a [routerLink]=\"['/users/edit',user.id]\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></a></td>\n            <td><i (click)=\"onRemoveUser(user)\" class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></td>            \n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[697]);
//# sourceMappingURL=main.bundle.map