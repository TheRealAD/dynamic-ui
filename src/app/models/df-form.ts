import { DynamicFormSection} from './df-form-section';

interface DynamicFormConfiguration {

    sections : DynamicFormSection[];

}

export class DynamicForm {

    private sections: DynamicFormSection[];

    constructor(dfc: DynamicFormConfiguration) {
        this.sections = dfc.sections;
    }

    getSections() : DynamicFormSection[] {
        return this.sections;
    }

    getSection(i) : DynamicFormSection {
        return this.sections[i];
    }
    
}