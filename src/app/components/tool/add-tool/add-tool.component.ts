import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Tool} from '../../../models/tool';
import {ToolService} from '../../../services/tool.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-tool',
    templateUrl: './add-tool.component.html',
    styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent implements OnInit {

    @Output()
    newTool: Tool = {
        name: '', currentCount: 0, unitOfMeasure: 'PCS', allCount: 0,
        category: null, minimalCount: 0, isUnique: false, isToReturn: true,
        warrantyDate: null, location: '', isEnable: true, image: ''
    };

    constructor(private toolService: ToolService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit(event) {
        this.toolService.addTool(event.tool).subscribe(
            res => {
                if (event.file != null) {
                    this.uploadImage(res.id, event.file);
                } else {
                    this.router.navigate(['/tools/' + res.id]);
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    private uploadImage(id: number, file: File): void {
        this.toolService.uploadImage(id, file).subscribe(
            res => {
                console.log('Image added');
                this.router.navigate(['/tools/' + id]);
            }, error => {
                console.log('Error with add image');
            }
        );
    }

}
