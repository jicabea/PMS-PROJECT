import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewExcutionComponent } from '../project-excution/view-excution/view-excution.component';

@Component({
  selector: 'app-dashboard-consult',
  templateUrl: './dashboard-consult.component.html',
  styleUrls: ['./dashboard-consult.component.css']
})
export class DashboardConsultComponent implements OnInit {
  items = ['Ujenzi wa Msingi', 'Ununuzi wa vifaa vya ujenzi', 'Kutengeneza store', 'Demo'];
  expandedIndex = 0;
  
  animal: string | undefined;
  name: string | undefined;
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

  openDialog(){
    
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
