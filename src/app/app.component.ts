import { Component, OnInit }       from '@angular/core';

import { DynamicFormFieldService } from './services/dynamic-form-field.service';
import { DynamicFormSectionService } from './services/dynamic-form-section.service';
import { DynamicFormService } from './services/dynamic-form.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers:  [DynamicFormFieldService, DynamicFormSectionService, DynamicFormService]
})
export class AppComponent implements OnInit{

    dynamicForm: any;

    constructor(private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
        // this.dynamicFormService.initForm();
        // this.dynamicForm = this.dynamicFormService.getForm();
    }

}

