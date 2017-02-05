import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule }     from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { UsersService } from '../users/user.service';

@NgModule({
    imports: [ CommonModule, HttpModule, SharedModule ],
    providers: [ PostsService,UsersService ],
    declarations: [ PostsComponent  ],
    exports: [ PostsComponent ]
})

export class PostsModule{}