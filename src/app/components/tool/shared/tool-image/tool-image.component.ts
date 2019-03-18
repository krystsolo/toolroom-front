import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EmployeeService} from '../../../../services/employee.service';
import {ActivatedRoute} from '@angular/router';
import {log} from "util";
import {ToolService} from '../../../../services/tool.service';

@Component({
  selector: 'app-tool-image',
  templateUrl: './tool-image.component.html',
  styleUrls: ['./tool-image.component.css']
})
export class ToolImageComponent implements OnInit, OnChanges {

    @Input()
    toolId: number;
    @Input()
    width: number;
    @Input()
    height: number;
    @Input()
    source: any;

    constructor(private toolService: ToolService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.toolId != null) {
            this.toolService.getImage(this.toolId).subscribe(
                res => {
                    this.source = res;
                },
                error => {
                    console.log('Image not found for employeeId=' + this.toolId);
                    this.setDefaultPic();
                }
            );
        } else {
            this.setDefaultPic();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['source']) {
            this.source = changes.source.currentValue.toString();
        }
    }

    setDefaultPic() {
        log('defaultimage');
        this.source = 'assets/images/defaultToolImage.png';
    }
}
