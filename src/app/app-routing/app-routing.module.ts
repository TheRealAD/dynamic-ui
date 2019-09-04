import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { DesignerRootComponent } from '../designer/root/designer-root.component';

const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    { path: 'form', component: DynamicFormComponent },
    { path: 'designer', component: DesignerRootComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
