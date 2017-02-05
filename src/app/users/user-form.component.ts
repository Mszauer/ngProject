import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FormComponent }    from '../dirty-tracking.service';
import { UsersService } from './user.service';
import { User } from './user';
@Component({
    templateUrl: './user-form.component.html'
})

export class UserFormComponent implements OnInit {
    userId;
    form: FormGroup;
    emailPattern = "";
    title: string;
    user = new User();
    constructor(fb: FormBuilder, private _usersService: UsersService,
                private _router: Router, private _route: ActivatedRoute){
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: [''],
            address: fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: ['']
            })
        });
    }
    ngOnInit(){
        this._route.params.subscribe(params =>{
            this.userId = params["id"];
        });

        this.title = this.userId ? "Edit User" : "New User";
        if(!this.userId){
            return;
        }

        this._usersService.getUser(this.userId)
            .subscribe(
                res => this.user=res,
                response => {
                    if(response.status == 404){
                        this._router.navigate(['NotFound']);
                    }
                }
            );        
    }

    onSubmit(user: User){
        if (!this.userId){
            this.onAddUser(this.user);
        }
        else{
            this.onEditUser(this.user);
        }
    }

    onAddUser(user: User){
        this._usersService.createUser(user)
            .subscribe( res => {
                this.form.markAsPristine();
                this._router.navigate(['users']);
            });
    }

    onEditUser(user: User){
        this._usersService.editUser(this.userId,user)
            .subscribe( res => {
                this.form.markAsPristine();
                this._router.navigate(['users'])
            });
    }
}