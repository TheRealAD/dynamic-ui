import { Injectable } from '@angular/core';

import { FormField }     from '../models/form-field';
import { DynamicFormSection }     from '../models/df-form-section';

import { DynamicFormFieldService } from './dynamic-form-field.service';

@Injectable()
export class DynamicFormSectionService {

    formSections : DynamicFormSection[] = [];

    constructor(private dynamicFormFieldService: DynamicFormFieldService) { };

    getFormSections(containers: Object[]) : DynamicFormSection[] {

        this.formSections = containers.map(
            (container) => {

                const fields = this.dynamicFormFieldService.getFormFields(container['controllist']);
                const formSection = new DynamicFormSection({
                    'fields': fields,
                    'key': container['key'],
                    'label': container['label'],
                    'type': container['type'],
                    'visible': container['visible']
                });

                return formSection;
            }
        );

        return this.formSections;
        
    }

}