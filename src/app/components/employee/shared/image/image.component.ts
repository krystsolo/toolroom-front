import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {log} from 'util';
import {environment} from '../../../../../environments/environment';
import {HttpRequest} from '@angular/common/http';
import {EmployeeService} from '../../../../services/employee.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnChanges {

    @Input()
    employeeId: number;
    @Input()
    width: number;
    @Input()
    height: number;
    @Input()
    source: any;

    constructor(private employeeService: EmployeeService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.employeeId != null) {
            this.employeeService.getImage(this.employeeId).subscribe(
                res => {
                    this.source = res;
                },
                error => {
                    console.log('Image not found for employeeId=' + this.employeeId);
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
        this.source = 'assets/images/defaultEmployeeImage.png';
    }
}
