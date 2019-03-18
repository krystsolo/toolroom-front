import {Component, OnInit, Output} from '@angular/core';
import {Employee} from '../../../models/employee';
import {EmployeeService} from '../../../services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

    @Output()
    employee: Employee = {
        firstName: '', surName: '', password: '', userName: '', roles: [],
        isActive: true, phoneNumber: null, email: '', image: '', workingGroup: ''
    };

    isDataLoaded: boolean;

    constructor(private employeeService: EmployeeService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    onSubmit(event) {
        this.employeeService.saveEmployee(this.getEmployeeIdFromUrl(), event.emp)
            .subscribe(
                res => {
                    if (event.file != null) {
                        this.uploadImage(res.id, event.file);
                    } else {
                        this.routeToEmployeeView(res.id);
                    }
                },
                error => {
                    console.log(error);
                }
            );
    }

    private routeToEmployeeView(id: number) {
        this.router.navigate(['/employees/' + id]);
    }

    ngOnInit() {
        this.employeeService.getEmployee(
            this.getEmployeeIdFromUrl()
        )
            .subscribe(
                res => {
                    this.employee = res;
                    this.isDataLoaded = true;
                },
                error => {
                    console.log(error);
                }
            );
    }

    private uploadImage(id: number, file: File): void {
        this.employeeService.uploadImage(id, file).subscribe(
            res => {
                console.log('Image added');
                this.routeToEmployeeView(id);
            }, error => {
                console.log('Error with add image');
            },
            () => {
                console.log('Complete image upload');
            }
        );
    }
    private getEmployeeIdFromUrl() {
        return Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }
}
