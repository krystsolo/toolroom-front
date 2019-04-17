import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Tool} from '../../../../models/tool';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ToolService} from '../../../../services/tool.service';
import {Router} from '@angular/router';
import {container} from '@angular/core/src/render3';

@Component({
    selector: 'app-tool-table',
    templateUrl: './tool-table.component.html',
    styleUrls: ['./tool-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolTableComponent implements OnInit {

    displayedColumns = ['image', 'id', 'name', 'currentCount', 'allCount',
        'category', 'location'];
    dataSource: MatTableDataSource<Tool>;

    @Input() tools: Tool[];
    @Output() toolClicked = new EventEmitter<Tool>();

    @Input() width = 'container';
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tools);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onRowClicked(tool: Tool) {
        this.toolClicked.emit(tool);
    }

}
