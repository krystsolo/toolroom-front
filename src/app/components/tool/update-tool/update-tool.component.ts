import {Component, OnInit} from '@angular/core';
import {Tool} from '../../../models/tool';
import {Category} from '../../../models/category';
import {ToolService} from '../../../services/tool.service';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSlideToggleChange} from '@angular/material';

@Component({
    selector: 'app-update-tool',
    templateUrl: './update-tool.component.html',
    styleUrls: ['./update-tool.component.css']
})
export class UpdateToolComponent implements OnInit {

    tool: Tool = {
        name: '', currentCount: 0, unitOfMeasure: 'PCS', allCount: 0,
        category: null, minimalCount: 0, isUnique: false, isToReturn: true,
        warrantyDate: null, location: '', isEnable: true, image: ''
    };
    categories: Category[];
    minDate: Date;
    isToReturnChecked: boolean;
    isToReturnDisable: boolean;

    constructor(private toolService: ToolService, private categoryService: CategoryService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.minDate = new Date();
        this.categoryService.getCategories().subscribe(
            res => {
                this.categories = res;
            },
            error => {
                console.log(error);
            }
        );
        this.toolService.getTool(this.getToolIdFromUrl()).subscribe(
            res => {
                this.tool = res;
            },
            error => {
                console.log(error);
            }
        );
    }

    onSubmit() {
        this.toolService.saveTool(this.getToolIdFromUrl(), this.tool).subscribe(
            res => {
                this.router.navigate(['/tools/' + res.id]);
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

    private getToolIdFromUrl(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }

    back() {
        this.router.navigate(['/tools/' + this.getToolIdFromUrl()]);
    }

}
