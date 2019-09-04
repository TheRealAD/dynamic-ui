import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    constructor() { }

    ngOnInit() {

    }

}
