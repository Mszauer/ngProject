import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }            from './app.component';
import { NavbarComponent }         from './navbar.component';
import { HomeComponent }           from './home.component';
import { NotFoundComponent }       from './not-found.component';

import { UsersModule }             from './users/users.module';
import { PostsModule }             from './posts/posts.module';

import { usersRouting }            from './users/users.routing';
import { routing }                 from './app.routing';
import { postsRouting }            from './posts/posts.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule,
                  UsersModule, PostsModule,
                  usersRouting, postsRouting, routing ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent,
                  NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [  ]
})
export class AppModule { }
