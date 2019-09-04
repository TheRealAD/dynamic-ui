import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';


@Component({
    selector: 'app-googlesearch',
    templateUrl: './googlesearch.component.html',
    //styleUrls: ['./text.component.css']
  })
  export class GoogleSearchComponent implements OnInit {
  
      @Input() dfForm: FormGroup;
      @Input() dfFormField: FormField;
  
      constructor() { }
  
      ngOnInit() {
  
      }
  
  }