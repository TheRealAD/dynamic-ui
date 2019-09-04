import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextAreaComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    constructor() { }

    ngOnInit() {

    }

}
