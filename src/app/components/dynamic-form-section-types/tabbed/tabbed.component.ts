import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicForm } from '../../../models/df-form';
import { DynamicFormSection } from '../../../models/df-form-section';

@Component({
  selector: 'app-section-tabbed',
  templateUrl: './tabbed.component.html',
  styleUrls: ['./tabbed.component.css']
})
export class SectionTabbedComponent implements OnInit {

  @Input() dynamicForm: DynamicForm;
  @Input() dynamicFormSection: DynamicFormSection;
  @Input() dfFormGroup: FormGroup;
  selectedSectionIndex: Number;

  constructor() { }

  ngOnInit() {
    this.selectedSectionIndex = this.selectedSectionIndex ? this.selectedSectionIndex : 0;
  }

  selectSection(i) {
    this.selectedSectionIndex = i;
  }

}
