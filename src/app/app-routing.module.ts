import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddEmployeeComponent} from './components/employee/add-employee/add-employee.component';
import {AllEmployeesComponent} from './components/employee/all-employees/all-employees.component';
import {EmployeeViewComponent} from './components/employee/employee-view/employee-view.component';
import {AddToolComponent} from './components/tool/add-tool/add-tool.component';
import {ToolListComponent} from './components/tool/tool-list/tool-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'employees/add',
        component: AddEmployeeComponent
    },
    {
        path: 'employees',
        component: AllEmployeesComponent
    },
    {
        path: 'employees/:id',
        component: EmployeeViewComponent
    },
    {
        path: 'tools/add',
        component: AddToolComponent
    },
    {
        path: 'tools',
        component: ToolListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
