import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  Supervisor: string[] = ['Essaba Machum', 'Agness Mchome', 'Lucian Mtitu', 'Michael Chambi', 'Samuel Mshote'];
  constructor() { }

  ngOnInit(): void {
  }
}
