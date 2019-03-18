import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {EmployeeService} from '../../../services/employee.service';
import {Router} from '@angular/router';
import {Tool} from '../../../models/tool';
import {ToolService} from '../../../services/tool.service';
import {Category} from '../../../models/category';

@Component({
    selector: 'app-tool-list',
    templateUrl: './tool-list.component.html',
    styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

    tools: Tool[];
    isDataLoaded: boolean;
    constructor(
        private toolService: ToolService,
        private router: Router) {
    }


    ngOnInit() {
        this.toolService.getTools().subscribe(
            res => {
                console.log(res);
                this.tools = res;
                this.isDataLoaded = true;
            },
            error => {
                console.log(error);
            }
        );
    }

    onRowClicked(tool: Tool) {
        this.router.navigate(['/tools/' + tool.id]);
        console.log('Tool: ' + tool);
    }

}
