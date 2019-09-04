import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicForm } from '../../../models/df-form';
import { DynamicFormSection } from '../../../models/df-form-section';

@Component({
  selector: 'app-section-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SectionListComponent implements OnInit {

  @Input() dynamicForm: DynamicForm;
  @Input() dynamicFormSection: DynamicFormSection;
  @Input() dfFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
