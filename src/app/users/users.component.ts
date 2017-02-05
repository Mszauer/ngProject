import { Component }        from '@angular/core';
import { UsersService }     from './user.service';
import { FormComponent }    from '../dirty-tracking.service';
import { FormGroup }        from '@angular/forms';
import { Router }           from '@angular/router';

@Component({
    templateUrl:  './users.component.html'
})

export class UsersComponent implements FormComponent{
    form: FormGroup;
    users=[];
    constructor(private _usersService: UsersService, private _router: Router){
        this._usersService.getUsers()
            .subscribe( res => {
                this.users=res;
            }
        );
    }

    onRemoveUser(user){
        if (confirm("Are you sure you want to delete "+user.name+"?")){
            var index = this.users.indexOf(user);
             this.users.splice(index,1);
            this._usersService.destroyUser(user.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete the user.");
                        this.users.splice(index,0,user);
                    });
        }
    }
}