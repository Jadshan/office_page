import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: AboutComponent, path: 'About' },
  {
    component: EmployeeComponent,
    path: 'Employee',
    children: [
      { component: EmployeeListComponent, path: '' },
      { path: 'Create', component: EmployeeAddComponent },
      { component: EmployeeAddComponent, path: 'Edit/id' },
    ],
  },
  {
    component: ContactComponent,
    path: 'contact',
    children: [
      { component: AddcontactComponent, path: 'add' },
      { component: AddcontactComponent, path: 'edit/:id' },
    ],
  },

  //Lazy loading module
  {
    path: 'access',
    loadChildren: () =>
      import('./access-mod/access-mod.module').then(
        (opt) => opt.AccessModModule
      ),
  },
  //Lazy loading component
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((opt) => opt.LoginComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
