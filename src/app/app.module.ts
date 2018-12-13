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
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { ToolListComponent } from './components/tool/tool-list/tool-list.component';
import { AddToolComponent } from './components/tool/add-tool/add-tool.component';
import { UpdateToolComponent } from './components/tool/update-tool/update-tool.component';
import { ToolViewComponent } from './components/tool/tool-view/tool-view.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        AddEmployeeComponent,
        AllEmployeesComponent,
        EmployeeViewComponent,
        UpdateEmployeeComponent,
        ToolListComponent,
        AddToolComponent,
        UpdateToolComponent,
        ToolViewComponent
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
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
