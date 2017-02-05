import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'NotFound', component: NotFoundComponent },
    { path: '**', redirectTo: '' }
])