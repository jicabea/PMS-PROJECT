import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskDetailsUpdatesComponent } from '../task-details-updates/task-details-updates.component';

@Component({
  selector: 'app-view-excution',
  templateUrl: './view-excution.component.html',
  styleUrls: ['./view-excution.component.css']
})
export class ViewExcutionComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  // addDialog() {
  //   const dialogRef = this.dialog.open(AddTaskComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  addDialog(){
    this.dialog.open(AddTaskComponent);
  }
  updateDialog(){
    this.dialog.open(TaskDetailsUpdatesComponent)
  }
}
