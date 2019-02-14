import {Component, OnInit} from '@angular/core';
import {Tool} from '../../../models/tool';
import {Category} from '../../../models/category';
import {ToolService} from '../../../services/tool.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-tool-view',
    templateUrl: './tool-view.component.html',
    styleUrls: ['./tool-view.component.css']
})
export class ToolViewComponent implements OnInit {

    tool: Tool = {
        name: '', currentCount: 0, unitOfMeasure: 'PCS', allCount: 0,
        category: {name: ''}, minimalCount: 0, isUnique: false, isToReturn: true,
        warrantyDate: null, location: '', isEnable: true, image: ''
    };

    constructor(private toolService: ToolService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.toolService.getTool(this.getToolIdFromUrl()).subscribe(
            res => {
                this.tool = res;
            },
            error => {
                console.log(error);
            }
        );
    }

    private getToolIdFromUrl(): number {
        return Number(this.route.snapshot.paramMap.get('id'));
    }

    editTool() {
        this.router.navigate(['/tools/' + this.tool.id + '/update']);
    }

    deleteTool() {
        this.toolService.deleteTool(this.tool.id).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
        location.reload();
    }
}
