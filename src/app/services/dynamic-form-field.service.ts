import { FormField as DynamicFormField }     from '../models/form-field';

export class DynamicFormFieldService {

    formFields : DynamicFormField[] = [];
    formFieldsMap : Object = {};

    initControls(controls: Object[]) {
        
        this.formFields = controls.map(
            (control) => {

                const formField = new DynamicFormField({
                    'disabled': control['disabled'],
                    'errorMessages': control['errorMessages'],
                    'id': control['id'],
                    'key': control['key'],
                    'label': control['label'],
                    'mandatory': control['mandatory'],
                    'maxlength': control['maxlength'],
                    'path': control['path'],
                    'rows': control['rows'],
                    'selectorControl': control['selectorControl'],
                    'type': control['type'],
                    'value': control['value'],
                });

                this.formFieldsMap[control['key']] = formField;

                return formField;
            }
        );

    }

    getFormFields(controllist: Object[]) : DynamicFormField[] {
        return controllist.map(
            (control) => {
                const key = control['key'];
                const type = control['type'];
                if(type !== 'field') {  }
                return this.formFieldsMap[key];
            }
        );
    }

}