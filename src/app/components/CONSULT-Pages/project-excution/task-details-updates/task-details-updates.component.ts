import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details-updates',
  templateUrl: './task-details-updates.component.html',
  styleUrls: ['./task-details-updates.component.css']
})
export class TaskDetailsUpdatesComponent implements OnInit {
  task = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  progress=['demo', 'try', 'sample data'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex, );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      
      );
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
