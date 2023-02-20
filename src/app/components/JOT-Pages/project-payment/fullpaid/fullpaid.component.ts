import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../../project-approval/edit-project/edit-project.component';
import { ViewProjectComponent } from '../../project-approval/view-project/view-project.component';

@Component({
  selector: 'app-fullpaid',
  templateUrl: './fullpaid.component.html',
  styleUrls: ['./fullpaid.component.css']
})
export class FullpaidComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewDialog() {
    const dialogRef = this.dialog.open(ViewProjectComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editDialog() {
    const dialogRef = this.dialog.open(EditProjectComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
