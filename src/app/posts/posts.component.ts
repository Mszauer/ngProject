import { Component,OnInit } from '@angular/core';

import { PostsService }     from './posts.service';
import { UsersService }     from '../users/user.service';

import * as _ from 'underscore';

@Component({
    templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit{
    comments = [];
    users = [];
    posts = [];
    pagedPosts=[];

    pageSize = 10;

    commentsLoading;
    postsLoading;
    selectedPost;
    
    constructor(private _postsService: PostsService,
                private _usersService: UsersService){      
    }
    ngOnInit(){
        this.loadPosts();
        this.loadUsers();
    }
    private loadPosts(filter?){
        this.postsLoading=true;
        this._postsService.getPosts(filter)
            .subscribe( posts => {
                this.posts = posts;
                this.pagedPosts = _.take(this.posts,this.pageSize);
            },
            null,
            () => { this.postsLoading=false; });
    }
    private loadUsers(){
        this._usersService.getUsers()
            .subscribe( users =>{
                this.users=users;
            },
            null,
            () => { });
    }
    onSelectPost(post){
        this.selectedPost = post;
        this.commentsLoading=true;
        this._postsService.getComments(post.id)
            .subscribe( comments => {
                this.comments = comments;
            },
            null,
            () => { this.commentsLoading = false; });
    }

    onSelectUser(filter){
        this.selectedPost = null;
        this.loadPosts(filter);
    }

    onPageChanged(page){
        var startIndex = (page - 1) *this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts,startIndex),this.pageSize);
    }
}