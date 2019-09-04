import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;
    
    constructor() { }

    ngOnInit() {
    }

}
