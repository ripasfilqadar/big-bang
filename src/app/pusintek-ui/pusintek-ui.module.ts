import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { PuiConfirmDialogService } from './components/pui-confirm-dialog/pui-confirm-dialog.service';
import { PuiConfirmDialogComponent } from './components/pui-confirm-dialog/pui-confirm-dialog.component';
import { PuiSnackbarComponent } from './components/pui-snackbar/pui-snackbar.component';
import { PuiSnackbarService } from './components/pui-snackbar/pui-snackbar.service';
import { PuiInfoDialogService } from './components/pui-info-dialog/pui-info-dialog.service';
import { PuiInfoDialogComponent } from './components/pui-info-dialog/pui-info-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [PuiConfirmDialogComponent, PuiSnackbarComponent, PuiInfoDialogComponent],
  exports: [PuiConfirmDialogComponent, PuiInfoDialogComponent],
  entryComponents: [PuiConfirmDialogComponent, PuiSnackbarComponent, PuiInfoDialogComponent],
  providers: [PuiConfirmDialogService, PuiSnackbarService, PuiInfoDialogService]
})
export class PusintekUiModule {}
