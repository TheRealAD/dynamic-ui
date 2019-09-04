import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../models/form-field';

@Component({
    selector: 'df-form-field',
    templateUrl: './dynamic-form-field.component.html'
})
export class DynamicFormFieldComponent{

    @Input() dfFormGroup: FormGroup;
    @Input() dynamicFormField: FormField;

    /*get isValid() { 
        return this.dfForm.controls[this.dfFormfield.key].valid; 
    }*/

}