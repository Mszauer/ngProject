import { Router, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

import { DirtyTracking }    from '../dirty-tracking.service';

export const usersRouting = RouterModule.forChild([
    { path: 'users/new', component: UserFormComponent,
        canDeactivate: [DirtyTracking]},
    { path: 'users/edit/:id', component: UserFormComponent,
        canDeactivate: [ DirtyTracking ] }
    
])