import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { CustomerComponent } from './customer/customer.component';
import { FormComponent } from './course/form.component';

const routes: Routes = [
  { path: 'forms', component: FormsComponent },
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: 'customer', component: CustomerComponent},
  { path: 'course', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
