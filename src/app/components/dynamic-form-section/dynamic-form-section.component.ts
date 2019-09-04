import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFormSection} from '../../models/df-form-section';

@Component({
  selector: 'app-dynamic-form-section',
  templateUrl: './dynamic-form-section.component.html'
})
export class DynamicFormSectionComponent implements OnInit {

    @Input() dynamicFormSection: DynamicFormSection;
    @Input() dfFormGroup: FormGroup;
    displaySection: Boolean = true;

    constructor() { }

    ngOnInit() {
        this.displaySection = this.dynamicFormSection.getVisible();
    }

    toggleSectionDisplay() {
        this.displaySection = !this.displaySection;
    }

}
