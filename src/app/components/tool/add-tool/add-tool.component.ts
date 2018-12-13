import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Tool} from '../../../models/tool';
import {ToolService} from '../../../services/tool.service';
import {Category} from '../../../models/category';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {MatSlideToggle, MatSlideToggleChange} from '@angular/material';

@Component({
    selector: 'app-add-tool',
    templateUrl: './add-tool.component.html',
    styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {

    newTool: Tool = {
        name: '', currentCount: 0, unitOfMeasure: 'PCS', allCount: 0,
        category: null, minimalCount: 0, isUnique: false, isToReturn: true,
        warrantyDate: null, location: '', isEnable: true, image: ''
    };

    categories: Category[];
    minDate: Date;
    isToReturnChecked: boolean;
    isToReturnDisable: boolean;

    constructor(private toolService: ToolService, private categoryService: CategoryService,
                private router: Router) {
    }

    ngOnInit() {
        this.minDate = new Date();
    }

    onSubmit() {
        this.toolService.addTool(this.newTool).subscribe(
            res => {
                this.newTool = {
                    name: '', currentCount: 0, unitOfMeasure: 'PCS', allCount: 0,
                    category: null, minimalCount: 0, isUnique: false, isToReturn: true,
                    warrantyDate: null, location: '', isEnable: true, image: ''
                };
                this.router.navigate(['/employees/' + res.id]);
            },
            error => {
                console.log(error);
            }
        );
    }

    addCategory() {

    }

    uniqueChange($event: MatSlideToggleChange) {
        if ($event.checked === true) {
            this.isToReturnChecked = true;
            this.isToReturnDisable = true;
        } else {
            this.isToReturnDisable = false;
            this.isToReturnChecked = false;
        }
    }
}
