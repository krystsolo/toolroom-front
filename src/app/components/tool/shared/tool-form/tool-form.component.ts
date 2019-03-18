import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../../models/category';
import {Tool} from '../../../../models/tool';
import {CategoryService} from '../../../../services/category.service';
import {MatSlideToggleChange} from '@angular/material';
import {Employee} from '../../../../models/employee';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tool-form',
    templateUrl: './tool-form.component.html',
    styleUrls: ['./tool-form.component.css']
})
export class ToolFormComponent implements OnInit {

    @Output()
    editedToolChange = new EventEmitter<{ tool: Tool, file: File }>();

    @Input()
    set editedTool(tool: Tool) {
        this.tool = tool;
    }

    tool: Tool;
    selectedFile: File;
    url = '';
    categories: Category[];
    minDate: Date;
    isToReturnChecked: boolean;
    isToReturnDisable: boolean;

    constructor(private categoryService: CategoryService,
                private router: Router) {
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

    uniqueChange($event: MatSlideToggleChange) {
        if ($event.checked === true) {
            this.isToReturnChecked = true;
            this.isToReturnDisable = true;
        } else {
            this.isToReturnDisable = false;
            this.isToReturnChecked = false;
        }
    }

    onSubmit() {
        this.editedToolChange.emit({tool: this.tool, file: this.selectedFile});
    }

    back() {
        if (this.tool.id != null) {
            this.router.navigate(['/tools/' + this.tool.id]);
        } else {
            this.router.navigate(['/tools']);
        }
    }
}
