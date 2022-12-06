import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponentComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customers/:id', component: CustomersDetailComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
