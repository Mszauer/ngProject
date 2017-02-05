import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { UsersService } from './user.service';
import { DirtyTracking } from '../dirty-tracking.service';

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule ],
    providers: [ UsersService, DirtyTracking ],
    declarations: [
        UsersComponent, UserFormComponent
    ],
    exports: [
        UsersComponent, UserFormComponent
    ]
})

export class UsersModule{}