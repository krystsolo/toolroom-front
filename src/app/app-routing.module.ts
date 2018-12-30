import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AddEmployeeComponent} from './components/employee/add-employee/add-employee.component';
import {AllEmployeesComponent} from './components/employee/all-employees/all-employees.component';
import {EmployeeViewComponent} from './components/employee/employee-view/employee-view.component';
import {AddToolComponent} from './components/tool/add-tool/add-tool.component';
import {ToolListComponent} from './components/tool/tool-list/tool-list.component';
import {EmployeeEditComponent} from './components/employee/employee-edit/employee-edit.component';
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';
import {ToolViewComponent} from './components/tool/tool-view/tool-view.component';
import {UpdateToolComponent} from './components/tool/update-tool/update-tool.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
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
        path: 'employees/:userName',
        component: EmployeeViewComponent,

    },
    {
        path: 'employees/:userName/update',
        component: EmployeeEditComponent
    },
    {
        path: 'tools/add',
        component: AddToolComponent
    },
    {
        path: 'tools',
        component: ToolListComponent
    },
    {
        path: 'tools/:id',
        component: ToolViewComponent
    },
    {
        path: 'tools/:id/update',
        component: UpdateToolComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
