import { Component, NgModule, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, CollectionReference, doc, onSnapshot, updateDoc, addDoc, deleteDoc } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { Depot, DepotDialogComponent, DepotDialogResult } from './depot-dialog/depot-dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  public depot$: Observable<Depot[]>;
  constructor(public firestore: Firestore, private dialog: MatDialog) {
    this.depot$ = collectionData(collection(firestore, 'Depot') as CollectionReference<Depot>, { idField: 'id' });
  }
  ngOnInit(): void {
  }

  deleteItem(item: Depot) {
    deleteDoc(doc(this.firestore, 'Depot', item.id));
  }

  newDepot() {
    const dialogRef = this.dialog.open(DepotDialogComponent, {
      width: '270px',
      data: {
        depot: {},
      },
    });
    dialogRef.afterClosed().subscribe((result: DepotDialogResult | undefined) => {
      if (!result) {
        return;
      }
      addDoc(collection(this.firestore, 'Depot'), result.depot);
    });
  }

}


@NgModule({
  declarations: [
    DepotComponent,
    DepotDialogComponent
  ],
  exports: [
    DepotComponent,
    DepotDialogComponent,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  imports: [
    BrowserAnimationsModule,
    FormsModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})

export class DepotModule { }