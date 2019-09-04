import { Component, OnInit }  from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Response } from "@angular/http";

import { DynamicForm } from '../../models/df-form';
import { FormControl } from '@angular/forms';
import { DynamicFormFieldControlService } from '../../services/dynamic-form-field-control.service';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ DynamicFormFieldControlService ]
})
export class DynamicFormComponent implements OnInit {

    dynamicForm: DynamicForm; 
    //dfFormGroup: FormGroup = new FormGroup({});
    sectionDisplayType: String;
    dfFormGroup: FormGroup = new FormGroup({
        
        'custom_key' : new FormControl() //Section Number selected currently
    });

    constructor(private dynamicFormService: DynamicFormService, private formFieldControlService: DynamicFormFieldControlService) {  }

    ngOnInit() {
        this.dynamicFormService.getFormMetadataJson('SAMPLE_FORM')
            .subscribe((resp: Response) => {
                const metadata = resp.json();
                this.dynamicFormService.initForm(metadata);
                this.dynamicForm = this.dynamicFormService.getForm();
                this.initSections();
            }, (err) => {
                console.error(err);
            });
    }

    onFormRequested()
    {
        var t=<HTMLInputElement>document.getElementById("AAA");
        console.log("TEXT="+t.value);
        this.dynamicFormService.getFormMetadataJson(t.value)
            .subscribe((resp: Response) => {
                const metadata = resp.json();
                this.dynamicFormService.initForm(metadata);
                this.dynamicForm = this.dynamicFormService.getForm();
                this.initSections();
            }, (err) => {
                console.error(err);
            });
    }
    
    initSections() {
        const sections = this.dynamicForm.getSections();
        this.dfFormGroup = this.formFieldControlService.getFormGroups(sections);
        this.sectionDisplayType = 'LIST'; // TABBED, LIST;
    }

    onSubmit() {
        console.log(this.dfFormGroup.value);
    }
}