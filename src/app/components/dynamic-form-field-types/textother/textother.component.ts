import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { FormField }     from '../../../models/form-field';
import { Event } from '@angular/router/src/events';
import { DynamicFormService } from '../../../services/dynamic-form.service';
@Component({
  selector: 'app-textother',
  templateUrl: './textother.component.html',
  //styleUrls: ['./textappend.component.css']
})
export class TextOtherComponent implements OnInit {

    @Input() dfForm: FormGroup;
    @Input() dfFormField: FormField;

    needed="hidden";
    masterOptions=[];

    constructor(private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
        this.masterOptions = this.dynamicFormService.getOtherList();
    }

    changecat(value:HTMLSelectElement) {
      console.log(this.dfForm.value.dc_textother);
      if (this.dfForm.value.dc_textother=="Other")
        {
            this.needed="text";
            console.log(this.needed);
            //var element = document.createElement("input");
           // var foo = document.getElementById("abc");
            //foo.appendChild(element);
            //document.getElementById("abc").innerHTML="<input type='text' value=''>";

            
            
        }


   else if (this.dfForm.value.dc_textother!="Other")
        {
            this.needed="hidden";
         
        }

      
      

      
    }

}
