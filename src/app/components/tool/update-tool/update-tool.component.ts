import {Component, OnInit, Output} from '@angular/core';
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

    @Output()
    tool: Tool = {
        name: '', currentCount: 0, unitOfMeasure: 'PCS', allCount: 0,
        category: null, minimalCount: 0, isUnique: false, isToReturn: true,
        warrantyDate: null, location: '', isEnable: true, image: ''
    };

    isDataLoaded: boolean;

    constructor(private toolService: ToolService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.toolService.getTool(this.getToolIdFromUrl()).subscribe(
            res => {
                this.tool = res;
                this.isDataLoaded = true;
            },
            error => {
                console.log(error);
            }
        );
    }

    onSubmit(event) {
        this.toolService.saveTool(this.getToolIdFromUrl(), event.tool).subscribe(
            res => {if (event.file != null) {
                this.uploadImage(res.id, event.file);
            } else {
                this.routeToToolView(res.id);
            }
            },
            error => {
                console.log(error);
            }
        );
    }

    private routeToToolView(id: number) {
        this.router.navigate(['/tools/' + id]);
    }

    private getToolIdFromUrl(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }

    back() {
        this.router.navigate(['/tools/' + this.getToolIdFromUrl()]);
    }

    private uploadImage(id: number, file: File): void {
        this.toolService.uploadImage(id, file).subscribe(
            res => {
                console.log('Image added');
                this.routeToToolView(id);
            }, error => {
                console.log('Error with add image');
            },
            () => {
                console.log('Complete image upload');
            }
        );
    }
}
