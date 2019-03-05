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
import { RoleGuardService as RoleGuard } from './services/auth/role-guard.service';
import {Role} from './models/role';

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
        component: AddEmployeeComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.ADMIN]
        }
    },
    {
        path: 'employees',
        component: AllEmployeesComponent
    },
    {
        path: 'employees/:id',
        component: EmployeeViewComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.ADMIN]
        }
    },
    {
        path: 'employees/:id/update',
        component: EmployeeEditComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.ADMIN]
        }
    },
    {
        path: 'tools/add',
        component: AddToolComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.WAREHOUSEMAN]
        }
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
        component: UpdateToolComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.WAREHOUSEMAN]
        }
    },
    {
        path: 'categories',
        component: CategoryComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.WAREHOUSEMAN]
        }
    },
    {
        path: 'buyorders/add',
        component: AddBuyOrderComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.WAREHOUSEMAN]
        }
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
        component: EditBuyOrderComponent,
        canActivate: [RoleGuard],
        data: {
            role: Role[Role.WAREHOUSEMAN]
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
