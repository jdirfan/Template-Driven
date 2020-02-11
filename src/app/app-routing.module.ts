import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './templateForm/templateForm.component';
const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/startertemplateform' },
  { path: 'templateform', component: TemplateFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [ 
    TemplateFormComponent];
}

