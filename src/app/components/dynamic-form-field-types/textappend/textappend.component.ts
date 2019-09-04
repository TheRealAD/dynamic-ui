import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';
import { Event } from '@angular/router/src/events';
import { DynamicFormService } from '../../../services/dynamic-form.service';

@Component({
  selector: 'app-textappend',
  templateUrl: './textappend.component.html',
  //styleUrls: ['./textappend.component.css']
})
export class TextAppendComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    suffix="John Doe or Jane Doe";
    temp=this.suffix;
    masterOptions=[];

    constructor(private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
      this.masterOptions=this.dynamicFormService.getTextAppend();
        
    }

    changecat(value:HTMLSelectElement) {
      //console.log("**");
      console.log(this.dfForm.value.dc_textappend);
      if(this.dfForm.value.dc_textappend!="")
      {
      this.suffix=this.temp;
      }
      this.suffix=this.dfForm.value.dc_textappend+" "+this.suffix;
      

      
    }

}
