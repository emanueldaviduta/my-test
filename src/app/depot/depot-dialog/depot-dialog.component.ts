import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-depot-dialog',
  templateUrl: './depot-dialog.component.html',
  styleUrls: ['./depot-dialog.component.css']
})
export class DepotDialogComponent implements OnInit {
  private backupTask: Partial<Depot> = { ...this.data.depot };

  constructor(
    public dialogRef: MatDialogRef<DepotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DepotDialogData
  ) { }

  cancel(): void {
    this.data.depot.code = this.backupTask.code;
    this.data.depot.name = this.backupTask.name;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {

  }

}

export interface DepotDialogData {
  depot: Partial<Depot>;
  enableDelete: boolean;
}

export interface DepotDialogResult {
  depot: Depot;
  delete?: boolean;
}


export interface Depot {
  id: string;
  code: string;
  name: string;
}
