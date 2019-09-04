import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Event } from '@angular/router/src/events';

import { FormField } from '../../../models/form-field';

import { DynamicFormService } from '../../../services/dynamic-form.service';

@Component({
    selector: 'app-dependentlist',
    templateUrl: './dependentlist.component.html',
    styleUrls: ['./dependentlist.component.css']
})
export class DependentListComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    masterOptions = [];
    options = [];

    constructor(private dynamicFormService: DynamicFormService) { }

    ngOnInit() { 
        this.masterOptions = this.dynamicFormService.getFormControlMasterMetadataJson();
    }

    onSelectMaster() {
        console.log(this.dfForm.value.dc_dependent);
        this.options = this.dynamicFormService.getFormControlMetadataJson(this.dfForm.value.dc_dependent);
    }

}
