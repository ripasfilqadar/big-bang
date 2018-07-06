import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PuiInfoDialogComponent } from './pui-info-dialog.component';

@Injectable()
export class PuiInfoDialogService {
	isHidden = false;
    constructor(private dialog: MatDialog) { }

	public info(title: string, message: string, time: string = ""): Observable<boolean> {

		let dialogRef: MatDialogRef<PuiInfoDialogComponent>;

		dialogRef = this.dialog.open(PuiInfoDialogComponent);

        dialogRef.componentInstance.title = title;
		dialogRef.componentInstance.message = message;
		dialogRef.componentInstance.time = time;
		if (time == "") {
			this.isHidden = true;
		}

        return dialogRef.afterClosed();
    }
}