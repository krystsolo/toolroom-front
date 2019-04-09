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
import {AddEmployeeComponent} from './components/employee/add-employee/add-employee.component';
import {EmployeeService} from './services/employee.service';
import {AllEmployeesComponent} from './components/employee/all-employees/all-employees.component';
import {EmployeeViewComponent} from './components/employee/employee-view/employee-view.component';
import {ToolListComponent} from './components/tool/tool-list/tool-list.component';
import {AddToolComponent} from './components/tool/add-tool/add-tool.component';
import {UpdateToolComponent} from './components/tool/update-tool/update-tool.component';
import {ToolViewComponent} from './components/tool/tool-view/tool-view.component';
import {EmployeeDataComponent} from './components/employee/shared/employee-data/employee-data.component';
import {EmployeeEditComponent} from './components/employee/employee-edit/employee-edit.component';
import {DashboardComponent} from './components/dashboard/dashboard/dashboard.component';
import {CategoryComponent} from './components/tool/category/category.component';
import {AddBuyOrderComponent} from './components/buy-order/add-buy-order/add-buy-order.component';
import {AllBuyOrdersComponent} from './components/buy-order/all-buy-orders/all-buy-orders.component';
import {BuyOrderViewComponent} from './components/buy-order/buy-order-view/buy-order-view.component';
import {EditBuyOrderComponent} from './components/buy-order/edit-buy-order/edit-buy-order.component';
import {ToolService} from './services/tool.service';
import {BuyOrderService} from './services/buy-order.service';
import {CategoryService} from './services/category.service';
import {ImageComponent} from './components/employee/shared/image/image.component';
import {EmployeeShortViewComponent} from './components/employee/shared/employee-short-view-dialog/employee-short-view.component';
import {ToolImageComponent} from './components/tool/shared/tool-image/tool-image.component';
import {ToolFormComponent} from './components/tool/shared/tool-form/tool-form.component';
import {BuyOrderFormComponent} from './components/buy-order/shared/buy-order-form/buy-order-form.component';
import {ToolTableComponent} from './components/tool/shared/tool-table/tool-table.component';
import {ToolChoiceDialogComponent} from './components/tool/shared/tool-choice-dialog/tool-choice-dialog.component';
import { AddDestructionOrderComponent } from './components/destruction-order/add-destruction-order/add-destruction-order.component';
import { EditDestructionOrderComponent } from './components/destruction-order/edit-destruction-order/edit-destruction-order.component';
import { AllDestructionOrderComponent } from './components/destruction-order/all-destruction-order/all-destruction-order.component';
import { ViewDestructionOrderComponent } from './components/destruction-order/view-destruction-order/view-destruction-order.component';
import { FormDestructionOrderComponent } from './components/destruction-order/shared/form-destruction-order/form-destruction-order.component';
import {DestructionOrderService} from './services/destruction-order.service';
import { LendingOrdersListComponent } from './components/lending-order/lending-orders-list/lending-orders-list.component';
import { LendingOrderViewComponent } from './components/lending-order/shared/lending-order-view/lending-order-view.component';
import { LendingOrderAddComponent } from './components/lending-order/lending-order-add/lending-order-add.component';
import { LendingOrderEditComponent } from './components/lending-order/lending-order-edit/lending-order-edit.component';
import { LendingAndReturnOrderViewComponent } from './components/lending-order/lending-and-return-order-view/lending-and-return-order-view.component';
import { LendingReturnOrderViewComponent } from './components/lending-order/shared/lending-return-order-view/lending-return-order-view.component';
import { LendingReturnsListComponent } from './components/lending-order/lending-returns-list/lending-returns-list.component';
import { LendingReturnEditComponent } from './components/lending-order/lending-return-edit/lending-return-edit.component';
import { LendingOrderFormComponent } from './components/lending-order/shared/lending-order-form/lending-order-form.component';
import { EmployeeChoiceDialogComponent } from './components/employee/shared/employee-choice-dialog/employee-choice-dialog.component';
import { EmployeesTableComponent } from './components/employee/shared/employees-table/employees-table.component';


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
        ImageComponent,
        EmployeeShortViewComponent,
        ToolImageComponent,
        ToolFormComponent,
        BuyOrderFormComponent,
        ToolTableComponent,
        ToolChoiceDialogComponent,
        AddDestructionOrderComponent,
        EditDestructionOrderComponent,
        AllDestructionOrderComponent,
        ViewDestructionOrderComponent,
        FormDestructionOrderComponent,
        LendingOrdersListComponent,
        LendingOrderViewComponent,
        LendingOrderAddComponent,
        LendingOrderEditComponent,
        LendingAndReturnOrderViewComponent,
        LendingReturnOrderViewComponent,
        LendingReturnsListComponent,
        LendingReturnEditComponent,
        LendingOrderFormComponent,
        EmployeeChoiceDialogComponent,
        EmployeesTableComponent
    ],

    entryComponents: [
        EmployeeShortViewComponent,
        ToolChoiceDialogComponent,
        EmployeeChoiceDialogComponent
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
        DestructionOrderService,
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
