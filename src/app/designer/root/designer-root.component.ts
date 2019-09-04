import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Response } from "@angular/http";

import { FormField } from '../../models/form-field';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-designer-root',
  templateUrl: './designer-root.component.html',
  styleUrls: ['./designer-root.component.css']
})
export class DesignerRootComponent implements OnInit {

    dfFormGroup: FormGroup = new FormGroup({
        'md' : new FormControl(),
        't1' : new FormControl(),
        'dropdownitem' : new FormControl(),
        'custom_key' : new FormControl(), // Default name given for every control
        'range_min' : new FormControl(), // Controls for range
        'range_max' : new FormControl(),
        'text_default' : new FormControl(), // Controls for text
        'text_max' : new FormControl(),
        'selected_control' : new FormControl(),
        'sectionno' : new FormControl() //Section Number selected currently
    });
    dynamicFormFieldTextArea: FormField = new FormField({
        'id': 'md',
        'key': 'md',
        'label': 'Metadata',
        'type': 'textarea',
        'rows': 25
    });
 // These variables toggle when the add new..... button is clicked   
    wantnewsection=false;
    wantnewdate=false;
    wantnewdropdown=false;
    wantnewrange=false;
    wantnewtext=false;
    wantnewtoggle=false;

    wantnewdependent=false;
    wantnewtextother=false;
    wantnewtextappend=false;
    wantnewbutton=false;
    wantnewchart=false;
    wantnewgoogle=false;
    wanttodelete=false;

    selected_control_key='';

    //Control counts
    section_count=2;
    dropdown_count=1;
    date_count=1;
    text_count=1;
    range_count=1;
    toggle_count=1;
    dependent_count=1;
    textappend_count=1;
    textother_count=1;
    button_count=1;
    chart_count = 1;
    google_count=1;
source="http://localhost:4201/form";

    //Initial Reading
    is_first_time=true;
    is_disabled=false;
    meta={};
    ddlist={};
    ddlist_count;
    xx={};

    //Current Section
    current_section=1;

    //Options for section selection
     Options=[];
     sectionwiseoptions=[
         {
             "key":-1,
             "value":-1
         }
     ];
    /* Options=[
        {
            "key": 1,
            "value": 1
        },
        {
            "key":2,
            "value": 2
        }
    ] */// Default 2 sections

    constructor(private dynamicFormService: DynamicFormService) { }

    ngOnInit() {
        this.section_count=2;
        this.dropdown_count=1;
        this.date_count=1;
        this.text_count=1;
        this.range_count=1;
        this.toggle_count=1;
        this.dependent_count=1;
        this.textappend_count=1;
        this.textother_count=1;
        this.button_count=1;
       // this.onResetJSON();
        this.dynamicFormService.getFormMetadataJson('SAMPLE_FORM')
            .subscribe((resp: Response) => {
                const metadata = JSON.stringify(resp.json(), null, 4);
                this.dfFormGroup.setControl('md', new FormControl(metadata));
                
                this.section_count=0;
                var metaresp=JSON.parse(metadata);
                for (let sec of metaresp['containers'])
                {
                    console.log(sec);
                    this.Options.push({
                        "key": this.section_count+1,
                        "value":this.section_count+1
                    })
                    this.section_count++;
                }
                this.meta=metaresp;
                console.log(this.meta);
                console.log(this.Options);
                
                //this.xx.push()
                //console.log(metadata);
                

            }, (err) => {
                console.error(err);
            });

      
           
            
            



            
    }
makeAllControlsInvisible()
{
    this.wantnewsection=false;
    this.wantnewdate=false;
    this.wantnewdropdown=false;
    this.wantnewrange=false;
    this.wantnewtext=false;
    this.wantnewtoggle=false
    this.wantnewbutton=false;
    this.wantnewtextappend=false;
    this.wantnewtextother=false;
    this.wantnewchart=false;  
}

    onSubmit() {
        this.meta['FORM_NAME']='TEMPFORM';
        this.dynamicFormService.setFormMetadataJson(JSON.stringify(this.meta))
            .subscribe((resp: Response) => {
                console.log(resp);
                this.source="http://localhost:4201/form";
                window.location.reload();
            }, (err) => {
                console.error(err);
            });
    }

    onFormPublish()
    {
        var fn=<HTMLInputElement>document.getElementById("FRMNAME");
        var recdname=fn.value;
        this.meta['FORM_NAME']=recdname;
        this.dynamicFormService.setFormMetadataJson(JSON.stringify(this.meta))
            .subscribe((resp: Response) => {
                console.log(resp);
                this.source="http://localhost:4201/form";
                //this.onResetJSON();
                //this.ngOnInit();
                window.location.reload();
            }, (err) => {
                console.error(err);
            });
            //this.ngOnInit();
            this.meta['FORM_NAME']='TEMPFORM';
            this.onResetJSON();
            window.location.reload();
    }

    onNewSection() {
        this.makeAllControlsInvisible();
                this.wantnewsection=true;               

            
    }

    onNewDropdown() {
        this.makeAllControlsInvisible();
                this.wantnewdropdown=true;   
                this.ddlist_count=0;            

    
}
onNewDate() {
    this.makeAllControlsInvisible();
    this.wantnewdate=true;               


}

onNewRange() {
    this.makeAllControlsInvisible();
    this.wantnewrange=true;               


}
onNewText() {
    this.makeAllControlsInvisible();
    this.wantnewtext=true;               


}
onNewToggle() {
    this.makeAllControlsInvisible();
    this.wantnewtoggle=true;               


}


onNewDependent()
{
    this.makeAllControlsInvisible(); 
this.wantnewdependent=true;
}
onDelete()
{
    this.wanttodelete=true;
    console.log(this.Options);
}

onNewOther()
{
this.makeAllControlsInvisible();
this.wantnewtextother=true;
}

    onNewSectionCreate() {
        this.dynamicFormService.getFormMetadataJson('SAMPLE_FORM')
            .subscribe((resp: Response) => {
                const metadata = JSON.stringify(resp.json(), null, 4);
                this.dfFormGroup.setControl('md', new FormControl(metadata));
                
                // NEWLY ADDED CODE BEGINS

                if (this.is_first_time==true)
                {var jsonContent = JSON.parse(metadata);
                    this.meta=jsonContent;
                    this.is_first_time=false;
                }
                var v=true;
               var collapse=<HTMLInputElement>document.getElementById("section_collapsed");
               if(collapse.checked){v=false;}
                this.meta['containers'][this.section_count]={"key":this.dfFormGroup.value.t1, "type":"SECTION","controllist":[],"visible":v};
                console.log(this.meta);
                this.wantnewsection=false;
                this.section_count++;
                this.Options.push({"key":this.section_count, "value":this.section_count});
                // NEWLY ADDED CODE ENDS

            }, (err) => {
                console.error(err);
            });
    }

    onNewDropdownCreate() {
        this.dropdown_count++;
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_type_"+this.dropdown_count,"type":"field"});
        
        this.meta['controls'].push(
            {
                "id": "dc_type_"+this.dropdown_count,
            "key": "dc_type_"+this.dropdown_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "DROPDOWN",
            "disabled": false,
            "selectorControl": {
                "defaultValue": "LOCAL_FILE",
                "options":this.ddlist /* {
                    "LOCAL_FILE": "fbt_option_local_file",
                    "PULL": "fbt_option_pull",
                    "SMBPULL": "fbt_option_smbpull",
                    "SCRIPTPULL": "fbt_option_scriptpull",
                    "LOCAL_SCRIPTPULL": "fbt_option_local_scriptpull",
                    "WBEM_PULL": "fbt_option_wbem_pull",
                    "LOCAL_WINDOWS_EVENTS": "fbt_option_local_windows_events",
                    "INTEGRATION": "fbt_option_integration",
                    "PORT_PUSH": "fbt_option_port_push",
                    "REST_END_POINT": "fbt_option_rest_end_point",
                    "FILE_UPLOAD": "fbt_option_file_upload"
                } */
            },
            "mandatory": true,
            "path": "."
            }
        )
        console.log(this.meta);
        this.wantnewdropdown=false;
    }

    onNewDateCreate() {
        
        this.date_count++;
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_date_"+this.date_count,"type":"field"});
        this.meta['controls'].push(
            {
                "id": "dc_date_"+this.date_count,
                "key": "dc_date_"+this.date_count,
                "label": this.dfFormGroup.value.custom_key,
                "type": "DATE",
                "disabled": false,
                "mandatory": true,
                "value": null
            }
        )    
          
        //this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_date","type":"field"});
        console.log(this.meta);
        this.wantnewdate=false;
    }
    onNewRangeCreate() {
        this.range_count++;
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_range_"+this.range_count,"type":"field"});
        this.meta['controls'].push(
            {
                "id": "dc_range_"+this.range_count,
                "key": "dc_range_"+this.range_count,
                "label": this.dfFormGroup.value.custom_key,
                "type": "RANGE",
                "minlength": this.dfFormGroup.value.range_min,
                "maxlength": this.dfFormGroup.value.range_max,
                "value": 60
            }
        )
        console.log(this.meta);
        this.wantnewrange=false;
    }
    onNewTextCreate() {
        this.text_count++;
        this.is_disabled=false;
        var a=<HTMLInputElement>document.getElementById("checkDisable");
        if(a.checked){this.is_disabled=true;}
        console.log(a.checked);
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_name_"+this.text_count,"type":"field"});
        this.meta['controls'].push(
            {
                "id": "dc_name_"+this.text_count,
                "key": "dc_name_"+this.text_count,
                "label": this.dfFormGroup.value.custom_key,
                "type": "TEXT",
                "disabled": this.is_disabled,
                "mandatory": true,
                "maxlength": this.dfFormGroup.value.text_max,
                "path": ".",
                "value": this.dfFormGroup.value.text_default,
                "errorMessages": {
                    "REQUIRED_ERROR": "fbt_REQUIRED_ERROR_instance_name"
                }
            }
        )
        console.log(this.meta);
        this.wantnewtext=false;
        
    }
    onNewToggleCreate() {
        this.toggle_count++;
        var b=false;
        var a=<HTMLInputElement>document.getElementById("toggleDefault");
        if(a.checked){b=true;}
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_toggle_"+this.toggle_count,"type":"field"});
        this.meta['controls'].push(
            {
                "id": "dc_toggle_"+this.toggle_count,
                "key": "dc_toggle_"+this.toggle_count,
                "label": this.dfFormGroup.value.custom_key,
                "type": "TOGGLE",
                "disabled": true,
                "value": b
            }

        )
        console.log(this.meta);
        this.wantnewtoggle=false;
    }

    onNewChart()
    {
        this.makeAllControlsInvisible();
        this.wantnewchart = true;
    }

    onNewChartCreate()
    {
        this.chart_count++;
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_chart_"+this.chart_count,"type":"field"});
        this.meta['controls'].push(
            {
                "id":"dc_chart_"+this.chart_count,
                "key":"dc_chart_"+this.chart_count,
                "label": this.dfFormGroup.value.custom_key,
                "type": "CHART",
                "disabled": false
            }
        )
    }

onNewDependentCreate(){
this.dependent_count++;
this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_dependent_"+this.dependent_count,"type":"field"});
this.meta['controls'].push(
    {
        "id": "dc_dependent_"+this.dependent_count,
        "key": "dc_dependent_"+this.dependent_count,
        "label": this.dfFormGroup.value.custom_key,
        "type": "DEPENDENTLIST",
        "disabled": false
    }
)
}

onNewOtherCreate(){
    this.textother_count++;
    this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_textother_"+this.dependent_count,"type":"field"});
    this.meta['controls'].push(
        {
            "id": "dc_textother_"+this.textother_count,
            "key": "dc_textother_"+this.textother_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "TEXTOTHER",
            "disabled": false
        }
    )
}

    onSectionSelectChanged()
    {
this.current_section=this.dfFormGroup.value.sectionno;
this.sectionwiseoptions=[];
var key;
for(let sec of this.meta['containers'][this.current_section-1]['controllist'])
{
    key=sec['key'];
    for(let sec2 of this.meta['controls'])
    {
        if(sec2['key']==key)
        {
        this.sectionwiseoptions.push(
            {
                "key":sec2['key'],
                "value":sec2['label']
            }
            //console.log("Pushing")
        )
        console.log("Pushing")}
    }
    console.log(this.sectionwiseoptions);
}
    }


    onNewGoogle(){
        this.wantnewgoogle=true;
    }
    onNewGoogleCreate(){
this.google_count++;
        this.meta['containers'][this.current_section-1]['controllist'].push({"key":"dc_googlesearch_"+this.google_count,"type":"field"});
    this.meta['controls'].push(
        {
            "id": "dc_googlesearch_"+this.google_count,
            "key": "dc_googlesearch_"+this.google_count,
            "label": this.dfFormGroup.value.custom_key,
            "type": "GOOGLESEARCH",
            "disabled": false
        }
    )
    this.wantnewgoogle=false;
    this.onSubmit();
    //s

    }


    onDeleteFromForm()
    {console.log(this.current_section);
        var a=0,b=0;
        for(let sec of this.meta['containers'][this.current_section-1]['controllist'])
        {a++;
            if(sec['key']==this.selected_control_key) //Found
            {
                //delete sec['key'];
                //delete sec['type'];
                 
                b=a;
            }
        }
        this.meta['containers'][this.current_section-1]['controllist'].splice(b-1,1);
        a=0;
        b=0;

        for(let sec of this.meta['controls'])
        {a++;
            if(sec['key']==this.selected_control_key) //Found
            {
                //delete sec['key'];
                //delete sec['type'];
                 
                b=a;
            }
        }
        this.meta['controls'].splice(b-1,1);
        console.log(this.meta);
        this.onSubmit();
    }

    onNewItemAdded()
    {
        var a="key"+this.ddlist_count;
        console.log(a);
        this.ddlist[a]=this.dfFormGroup.value.dropdownitem;

this.ddlist_count++;
console.log(this.ddlist)
    }

    onControlSelected(cval)
    {
        console.log(cval);
        var arr=cval.split(":");
        this.selected_control_key=arr[1].slice(1);
        console.log(arr[1]);
        console.log(arr[1].slice(1))
    }

    onResetJSON() {
var original={
    "containers": [
        {
            "key": "dc_create_data_collector1",
            "type": "SECTION",
            "controllist": [
                {
                    "key": "dc_name",
                    "type": "field"
                },
                {
                    "key": "dc_type",
                    "type": "field"
                },
                {
                    "key": "dc_dependent",
                    "type": "field"
                },
                {
                    "key": "dc_textother",
                    "type": "field"
                },
                {
                    "key": "dc_toggle",
                    "type": "field"
                }
            ],
            "label": "fbt_create_data_collector1",
            "visible": true
        },
        {
            "key": "dc_create_data_collector2",
            "type": "SECTION",
            "controllist": [
                {
                    "key": "dc_date",
                    "type": "field"
                },
                {
                    "key": "dc_range",
                    "type": "field"
                },
                {
                    "key": "dc_textappend",
                    "type": "field"
                },
                {
                    "key": "dc_button",
                    "type": "field"
                }
            ],
            "visible": false
        }
    ],
    "controls": [
        {
            "id": "dc_name",
            "key": "dc_name",
            "label": "fbt_name",
            "type": "TEXT",
            "disabled": false,
            "mandatory": true,
            "maxlength": 100,
            "path": ".",
            "value": "Hello World !!",
            "errorMessages": {
                "REQUIRED_ERROR": "fbt_REQUIRED_ERROR_instance_name"
            }
        },
        {
            "id": "dc_type",
            "key": "dc_type",
            "label": "fbt_type",
            "type": "DROPDOWN",
            "disabled": false,
            "selectorControl": {
                "defaultValue": "LOCAL_FILE",
                "options": {
                    "LOCAL_FILE": "fbt_option_local_file",
                    "PULL": "fbt_option_pull",
                    "SMBPULL": "fbt_option_smbpull",
                    "SCRIPTPULL": "fbt_option_scriptpull",
                    "LOCAL_SCRIPTPULL": "fbt_option_local_scriptpull",
                    "WBEM_PULL": "fbt_option_wbem_pull",
                    "LOCAL_WINDOWS_EVENTS": "fbt_option_local_windows_events",
                    "INTEGRATION": "fbt_option_integration",
                    "PORT_PUSH": "fbt_option_port_push",
                    "REST_END_POINT": "fbt_option_rest_end_point",
                    "FILE_UPLOAD": "fbt_option_file_upload"
                }
            },
            "mandatory": true,
            "path": "."
        },
        {
            "id": "dc_date",
            "key": "dc_date",
            "label": "fbt_date",
            "type": "DATE",
            "disabled": false,
            "mandatory": true,
            "value": null
        },
        {
            "id": "dc_range",
            "key": "dc_range",
            "label": "fbt_range",
            "type": "RANGE",
            "minlength": 0,
            "maxlength": 100,
            "value": 60
        },
        {
            "id": "dc_button",
            "key": "dc_button",
            "label": "fbt_button",
            "type": "BUTTON",
            "disabled": false
        },
        {
            "id": "dc_dependent",
            "key": "dc_dependent",
            "label": "fbt_dependentlist",
            "type": "DEPENDENTLIST",
            "disabled": false
        },
        {
            "id": "dc_textappend",
            "key": "dc_textappend",
            "label": "fbt_textappend",
            "type": "TEXTAPPEND",
            "disabled": false
        },
        {
            "id": "dc_textother",
            "key": "dc_textother",
            "label": "fbt_textother",
            "type": "TEXTOTHER",
            "disabled": false
        },
        {
            "id": "dc_toggle",
            "key": "dc_toggle",
            "label": "fbt_toggle",
            "type": "TOGGLE",
            "disabled": true,
            "value": false
        }
        
    ],
    "FORM_NAME":"TEMPFORM"
}



        this.dynamicFormService.setFormMetadataJson(JSON.stringify(original))
            .subscribe((resp: Response) => {
                
                window.location.reload();
            }, (err) => {
                console.error(err);
            });
    }

}
