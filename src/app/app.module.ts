import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MaterialModule} from './material.module';
import {LoginComponent} from './components/login/login.component';
import {LoginService} from './services/auth/login.service';
import {InterceptorService} from './services/auth/interceptor.service';
import {TokenStorage} from './services/auth/token-storage';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import {EmployeeService} from './services/employee.service';
import { AllEmployeesComponent } from './components/employee/all-employees/all-employees.component';
import { EmployeeViewComponent } from './components/employee/employee-view/employee-view.component';
import { ToolListComponent } from './components/tool/tool-list/tool-list.component';
import { AddToolComponent } from './components/tool/add-tool/add-tool.component';
import { UpdateToolComponent } from './components/tool/update-tool/update-tool.component';
import { ToolViewComponent } from './components/tool/tool-view/tool-view.component';
import { EmployeeDataComponent } from './components/employee/shared/employee-data/employee-data.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CategoryComponent } from './components/tool/category/category.component';
import { AddBuyOrderComponent } from './components/buy-order/add-buy-order/add-buy-order.component';
import { AllBuyOrdersComponent } from './components/buy-order/all-buy-orders/all-buy-orders.component';
import { BuyOrderViewComponent } from './components/buy-order/buy-order-view/buy-order-view.component';
import { EditBuyOrderComponent } from './components/buy-order/edit-buy-order/edit-buy-order.component';
import {ToolService} from './services/tool.service';
import {BuyOrderService} from './services/buy-order.service';
import {CategoryService} from './services/category.service';
import { ImageComponent } from './components/employee/shared/image/image.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        AddEmployeeComponent,
        AllEmployeesComponent,
        EmployeeViewComponent,
        ToolListComponent,
        AddToolComponent,
        UpdateToolComponent,
        ToolViewComponent,
        EmployeeDataComponent,
        EmployeeEditComponent,
        DashboardComponent,
        CategoryComponent,
        AddBuyOrderComponent,
        AllBuyOrdersComponent,
        BuyOrderViewComponent,
        EditBuyOrderComponent,
        ImageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        LoginService,
        InterceptorService,
        TokenStorage,
        EmployeeService,
        ToolService,
        BuyOrderService,
        CategoryService,
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
