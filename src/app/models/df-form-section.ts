import { FormField as DynamicFormField } from './form-field';

interface DynamicFormSectionConfiguration {

    fields ?: DynamicFormField[];
    key: string;
    label: string;
    type: string;
    visible ?: Boolean;

}

export class DynamicFormSection {
    
    private fields: DynamicFormField[];
    private key: string;
    private label: string;
    private type: string;
    private visible: Boolean;

    constructor(dfsc: DynamicFormSectionConfiguration) {

        this.fields = dfsc.fields;
        this.key = dfsc.key;
        this.label = dfsc.label ? dfsc.label : dfsc.key;
        this.type = dfsc.type;
        this.visible = dfsc.visible !== undefined ? dfsc.visible : true;

    }

    getFields() : DynamicFormField[] {
        return this.fields;
    }
    
    getKey() : string {
        return this.key;
    }

    getLabel() : string {
        return this.label;
    }

    getVisible() : Boolean {
        return this.visible;
    }
    
}