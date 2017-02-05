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
var posts_service_1 = require("./posts.service");
var user_service_1 = require("../users/user.service");
var _ = require("underscore");
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
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/posts/posts.component.html'
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        user_service_1.UsersService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map