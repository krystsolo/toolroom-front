import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Employee} from '../../../../models/employee';
import {Router} from '@angular/router';

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html',
    styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

    // @Input() employee: Employee;
    employee: Employee;
    selectedFile: File;
    @Output() editedEmployeeChange = new EventEmitter<{emp: Employee, file: File}>();

    @Input()
    set editedEmployee(employee: Employee) {
        this.employee = employee;
    }

    url = '';

    /*get editedEmployee(): Employee {
        return this.employee;
    }*/

    constructor(private router: Router) {
    }

    ngOnInit() {
        console.log('employee id data ' + this.employee.id );
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
}
