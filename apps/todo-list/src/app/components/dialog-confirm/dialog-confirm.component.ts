import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'frontend-challenge-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent {
  constructor(private dialog: MatDialogRef<DialogConfirmComponent>) {}

  handleConfirm() {
    this.dialog.close(true);
  }
}
