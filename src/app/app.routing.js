"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var posts_component_1 = require("./posts/posts.component");
var users_component_1 = require("./users/users.component");
var not_found_component_1 = require("./not-found.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'posts', component: posts_component_1.PostsComponent },
    { path: 'NotFound', component: not_found_component_1.NotFoundComponent },
    { path: '**', redirectTo: '' }
]);
//# sourceMappingURL=app.routing.js.map