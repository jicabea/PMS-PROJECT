import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigationn',
  templateUrl: './navigationn.component.html',
  styleUrls: ['./navigationn.component.css']
})
export class NavigationnComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}
  ngOnInit(): void {}
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
