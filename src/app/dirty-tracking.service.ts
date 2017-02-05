import { CanDeactivate } from '@angular/router';
import { UsersComponent } from './Users/users.component';
import { FormGroup } from '@angular/forms';

export interface FormComponent{
    form: FormGroup;
}

export class DirtyTracking implements CanDeactivate<FormComponent>{
    canDeactivate(component: FormComponent){
    if (component.form.dirty){
        return confirm("You have unsaved changes. \n Are you sure you want to leave?")
    }
    return true;
    }
}