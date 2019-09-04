import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { FormField as DynamicFormField } from '../models/form-field';
import { DynamicFormSection}     from '../models/df-form-section';

export class DynamicFormFieldControlService {

    constructor() { }

    getFormGroups(dynamicFormSections : DynamicFormSection[]) : FormGroup {

        const formGroupConfig = {};

        dynamicFormSections.forEach(
            (dynamicFormSection) => {

                const formArray = new FormArray([]);
                dynamicFormSection.getFields().forEach(
                    (field) => {
                        formGroupConfig[field.getKey()] = this.getFormControl(field);
                    }
                )

            }
        )

        const formGroup = new FormGroup(formGroupConfig);
        return formGroup;

    }

    private getFormControl(dff : DynamicFormField) : FormControl {

        const validators = [];
        if(dff.getMandatory()) validators.push(Validators.required);

        const formControl = new FormControl(dff.getValue() || dff.getSelectorDefaultValue() || '', validators)
        return formControl;

    }

}
