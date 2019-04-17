import { Component, OnInit } from '@angular/core';
import {ToolService} from '../../../../services/tool.service';
import {Tool} from '../../../../models/tool';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tool-close-warranty-date',
  templateUrl: './tool-close-warranty-date.component.html',
  styleUrls: ['./tool-close-warranty-date.component.css']
})
export class ToolCloseWarrantyDateComponent implements OnInit {

    tools: Tool[];
    warrantyDate: string[] = ['week', 'month', 'threemonths'];
    warrantyChosen = 'week';
    isDataLoaded: boolean;
  constructor(private toolService: ToolService,
              private router: Router) { }

  ngOnInit() {
      this.loadData();
  }

    changeOption(option: string) {
      this.warrantyChosen = option;
        this.loadData();
    }

    private loadData() {

        this.toolService.getTools({warranty: this.warrantyChosen}).subscribe(
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
