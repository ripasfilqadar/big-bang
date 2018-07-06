import { Component } from '@angular/core'
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'pui-info-dialog',
  templateUrl: './pui-info-dialog.component.html'
})
export class PuiInfoDialogComponent {
  public title: string
  public message: string
  public time: string

  constructor(public dialogRef: MatDialogRef<PuiInfoDialogComponent>) {}
}
