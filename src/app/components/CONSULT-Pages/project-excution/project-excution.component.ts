import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewExcutionComponent } from './view-excution/view-excution.component';

@Component({
  selector: 'app-project-excution',
  templateUrl: './project-excution.component.html',
  styleUrls: ['./project-excution.component.css']
})
export class ProjectExcutionComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  viewDialog() {
    const dialogRef = this.dialog.open(ViewExcutionComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // editDialog() {
  //   const dialogRef = this.dialog.open(EditApprovalComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // deleteDialog(){
  //   const dialogRef =this.dialog.open(DeleteApprovalComponent);
  //   dialogRef.afterClosed().subscribe(result =>{
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}


