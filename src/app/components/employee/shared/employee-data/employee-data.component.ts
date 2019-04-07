import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Employee} from '../../../../models/employee';
import {Router} from '@angular/router';
import {RoleEnum} from '../../../../models/roleEnum';
import {Role} from '../../../../models/role';

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html',
    styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

    employee: Employee;
    selectedFile: File;
    @Output() editedEmployeeChange = new EventEmitter<{emp: Employee, file: File}>();

    @Input()
    set editedEmployee(employee: Employee) {
        this.employee = employee;
    }

    url = '';
    allRoles: Role[] = [{id: 3, roleType: RoleEnum[RoleEnum.WAREHOUSEMAN]}, {id: 1, roleType: RoleEnum[RoleEnum.ADMIN]}];
    employeeRole: Role = {id: 2, roleType: RoleEnum[RoleEnum.EMPLOYEE]};
    isDirty: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (this.employee.roles.length === 0) {
            this.employee.roles.push(this.employeeRole);
        } else {
            this.allRoles.map(role => {
                const index = this.employee.roles.map(r => r.id).indexOf(role.id);
                if (index !== -1 ) {
                    this.allRoles.splice(index, 1);
                }
            });
        }
    }

    onSubmit() {
        this.editedEmployeeChange.emit({emp: this.employee, file: this.selectedFile});
    }

    fileChangeEvent(event: any) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                this.url = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.selectedFile = event.target.files[0];
        }
    }

    back() {
        if (this.employee.id != null) {
            this.router.navigate(['/employees/' + this.employee.id]);
        } else {
            this.router.navigate(['/employees']);
        }
    }

    deleteRole(role: Role) {
        this.employee.roles.splice(this.employee.roles.indexOf(role), 1);
        this.allRoles.push(role);
        this.isDirty = true;
    }

    addRole(role: Role) {
        this.employee.roles.push(role);
        this.allRoles.splice(this.allRoles.indexOf(role), 1);
        this.isDirty = true;
    }
}
