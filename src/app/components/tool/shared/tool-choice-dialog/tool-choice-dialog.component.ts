import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Tool} from '../../../../models/tool';
import {ToolService} from '../../../../services/tool.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-tool-choice-dialog',
  templateUrl: './tool-choice-dialog.component.html',
  styleUrls: ['./tool-choice-dialog.component.css']
})
export class ToolChoiceDialogComponent implements OnInit {

    tools: Tool[];

    constructor(
        public dialogRef: MatDialogRef<ToolChoiceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    ngOnInit() {
        this.tools = this.data.tools;
    }

    onRowClicked(tool: Tool) {
        this.dialogRef.close(tool);
        console.log('Tool: ' + tool);
    }
}
