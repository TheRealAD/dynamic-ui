import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { DynamicFormService } from './services/dynamic-form.service';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/dynamic-form-field-types/chart/chart.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DesignerRootComponent } from './designer/root/designer-root.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { TextComponent } from './components/dynamic-form-field-types/text/text.component';
import { TextAreaComponent } from './components/dynamic-form-field-types/textarea/textarea.component';
import { DropdownComponent } from './components/dynamic-form-field-types/dropdown/dropdown.component';
import { DateComponent } from './components/dynamic-form-field-types/date/date.component';
import { RangeComponent } from './components/dynamic-form-field-types/range/range.component';
import { ButtonComponent } from './components/dynamic-form-field-types/button/button.component';
import { ToggleComponent } from './components/dynamic-form-field-types/toggle/toggle.component'
import { DynamicFormSectionComponent } from './components/dynamic-form-section/dynamic-form-section.component';
import { SectionTabbedComponent } from './components/dynamic-form-section-types/tabbed/tabbed.component';
import { SectionListComponent } from './components/dynamic-form-section-types/list/list.component';
import { DependentListComponent } from './components/dynamic-form-field-types/dependentlist/dependentlist.component';
import { TextAppendComponent } from './components/dynamic-form-field-types/textappend/textappend.component';
import { TextOtherComponent } from './components/dynamic-form-field-types/textother/textother.component';
import { GoogleSearchComponent } from './components/dynamic-form-field-types/googlesearch/googlesearch.component';

@NgModule({
    imports : [ 
        BrowserModule, 
        ReactiveFormsModule ,
        AppRoutingModule,
        HttpModule
    ],
    declarations : [ 
        AppComponent, 
        DynamicFormComponent, 
        DynamicFormFieldComponent, 
        TextComponent,
        TextAreaComponent,
        DropdownComponent,
        DateComponent, 
        RangeComponent,
        ButtonComponent, 
        ToggleComponent,
        DynamicFormSectionComponent, 
        SectionTabbedComponent, 
        SectionListComponent, 
        DesignerRootComponent,
        DependentListComponent,
        TextAppendComponent,
        TextOtherComponent,
        ChartComponent,
        GoogleSearchComponent
        
    ],
    bootstrap : [ 
        AppComponent 
    ],
    providers : [
        DynamicFormService
    ]
})

export class AppModule {
    constructor() {}
}