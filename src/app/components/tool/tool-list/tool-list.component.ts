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

    private tools: Tool[];
    displayedColumns = ['image', 'id', 'name', 'currentCount', 'allCount',
        'category', 'location', 'isEnable'];
    dataSource: MatTableDataSource<Tool>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private toolService: ToolService,
        private router: Router) {
    }


    ngOnInit() {
        this.toolService.getTools().subscribe(
            res => {
                console.log(res);
                this.tools = res;
                this.dataSource = new MatTableDataSource(this.tools);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            },
            error => {
                console.log(error);
            }
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onRowClicked(tool: Tool) {
        // if user.roles.contain === ADMIN then employee-details
        // else show simple employee info
        this.router.navigate(['/tools/' + tool.id]);
        console.log('Tool: ' + tool);
    }

}
