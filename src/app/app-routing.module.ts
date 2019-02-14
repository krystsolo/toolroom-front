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
import {CategoryComponent} from './components/tool/category/category.component';
import {AddBuyOrderComponent} from './components/buy-order/add-buy-order/add-buy-order.component';
import {AllBuyOrdersComponent} from './components/buy-order/all-buy-orders/all-buy-orders.component';
import {BuyOrderViewComponent} from './components/buy-order/buy-order-view/buy-order-view.component';
import {EditBuyOrderComponent} from './components/buy-order/edit-buy-order/edit-buy-order.component';

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
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
    {
        path: 'buyorders/add',
        component: AddBuyOrderComponent
    },
    {
        path: 'buyorders',
        component: AllBuyOrdersComponent
    },
    {
        path: 'buyorders/:id',
        component: BuyOrderViewComponent
    },
    {
        path: 'buyorders/:id/update',
        component: EditBuyOrderComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
