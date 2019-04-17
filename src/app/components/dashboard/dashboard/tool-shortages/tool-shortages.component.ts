import { Component, OnInit } from '@angular/core';
import {ToolService} from '../../../../services/tool.service';
import {Tool} from '../../../../models/tool';
import {Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-tool-shortages',
  templateUrl: './tool-shortages.component.html',
  styleUrls: ['./tool-shortages.component.css']
})
export class ToolShortagesComponent implements OnInit {

    tools: Tool[];
    isDataLoaded: boolean;
    constructor(private toolService: ToolService,
                private router: Router) { }

    ngOnInit() {
        this.toolService.getTools({toolsShortages: 'true'}).subscribe(
            res => {
                this.tools = res;
                this.isDataLoaded = true;
            }, error => console.log(error)
        );
    }


    onRowClicked(tool: Tool) {
        this.router.navigate(['/tools/' + tool.id]);
        console.log('Tool: ' + tool);
    }

}
