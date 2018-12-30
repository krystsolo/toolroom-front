import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Employee} from '../../../models/employee';

@Component({
    selector: 'app-employee-data',
    templateUrl: './employee-data.component.html',
    styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {

    // @Input() employee: Employee;
    private employee: Employee;
    @Output() editedEmployeeChange = new EventEmitter<Employee>();
    @Input() disableInputEdit: boolean;

    set editedEmployee(employee: Employee) {
        this.employee = employee;
        this.editedEmployeeChange.emit(employee);
    }

    @Input()
    get editedEmployee(): Employee {
        return this.employee;
    }

    constructor() {
    }

    ngOnInit() {
    }
}
