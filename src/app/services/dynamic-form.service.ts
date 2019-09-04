import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';

import { FormField as DynamicFormField }     from '../models/form-field';
import { DynamicFormSection }     from '../models/df-form-section';
import { DynamicForm } from '../models/df-form';

import { DynamicFormSectionService } from './dynamic-form-section.service';
import { DynamicFormFieldService } from './dynamic-form-field.service';
import { FormGroup, FormControl } from '@angular/forms';

const headerJson = new Headers({ 'Content-Type': 'application/json' });

@Injectable()
export class DynamicFormService {
    dfFormGroup: FormGroup = new FormGroup({
        
        'custom_key' : new FormControl() //Section Number selected currently
    });
    form : DynamicForm;
    metadata : Object;

    constructor(private http: Http, private dynamicFormSectionService: DynamicFormSectionService, private dynamicFormFieldService: DynamicFormFieldService) { }

    initForm(metadata) {
        this.metadata = metadata;
        
        this.dynamicFormFieldService.initControls(metadata['controls']);
        
        this.form = new DynamicForm({ 
            'sections' : this.dynamicFormSectionService.getFormSections(metadata['containers'])
        });
    }

    getForm() : DynamicForm {
        return this.form;
    }

    getMetadata() : Object {
        return this.metadata;
    }

    getFormMetadataJson(frmname:string) : Observable<Response> {
        // const { HOST, PORT } = this.envService.getConnectionDetails();
        var HOST = 'localhost', PORT = 3000;
        const url = (HOST && PORT) ? 'http://' + HOST + ':' + PORT : '';
        //console.log(this.dfFormGroup.value.custom_key);
        console.log(frmname);
        return this.http.get(url + '/df/api/formmetadata?FN='+frmname);
    }

    setFormMetadataJson(metadata: String) : Observable<Response> {
        // const { HOST, PORT } = this.envService.getConnectionDetails();
        var HOST = 'localhost', PORT = 3000;
        const url = (HOST && PORT) ? 'http://' + HOST + ':' + PORT : '';
        return this.http.post(url + '/df/api/formmetadata', metadata, { headers: headerJson });
    }

getOtherList()
{
    return[{
        'key': 'BTech',
        'value': 'BTech'
    },
    {
        'key': 'MBBS',
        'value': 'MBBS'
    },{
        'key': 'BA',
        'value': 'BA'
    },
{
    'key':'Other',
    'value':'Other'
}];

}

getTextAppend()
{
    return[{
        'key':'Doctor',
        'value':'Doctor'
    },
    {
        'key':'Sir',
        'value':'Sir'
    },
    {
        'key':'Madam',
        'value':'Madam'
    },
    {
        'key':'Mr',
        'value':'Mr'
    }];
}

    getFormControlMasterMetadataJson() {
        return [{
            'key' : 'A',
            'value' : 'Pune University'
        }, {
            'key' : 'B',
            'value' : 'Mumbai University'
        }, {
            'key' : 'C',
            'value' : 'Autonomous Institute'
        }];
    }

    getFormControlMetadataJson(option) {
        const someFormControlMetadata = {
            "A" : [
                {
                    'key': '001',
                    'value': 'PICT'
                },
                {
                    'key': '002',
                    'value': 'MIT'
                },
                {
                    'key': '003',
                    'value': 'SKNCOE'
                }
            ],
            "B" : [
                {
                    'key': '001',
                    'value': 'K J Somaiyya'
                },
                {
                    'key': '002',
                    'value': 'Father Agnell '
                },
                {
                    'key': '003',
                    'value': 'D Y Patil'
                }
            ],
            "C" : [
                {
                    'key': '001',
                    'value': 'COEP'
                },
                {
                    'key': '002',
                    'value': 'VIT'
                },
                {
                    'key': '003',
                    'value': 'Bharati Vidyapeeth'
                }
            ]
        };
        return someFormControlMetadata[option];
    }

}