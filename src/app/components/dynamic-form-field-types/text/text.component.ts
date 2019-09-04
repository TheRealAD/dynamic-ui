import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  // styleUrls: ['./text.component.css']
  styles:[`input[type=text] {
    border: 1px solid grey;
    border-radius: 5px;
}`]
})
export class TextComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    constructor() { }

    ngOnInit() {

    }

}
