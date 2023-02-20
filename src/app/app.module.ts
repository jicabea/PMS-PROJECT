import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MAT COMPONENTS
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatStepperModule} from '@angular/material/stepper';

//COMPONENTS
import { ProjectApprovalComponent } from './components/JOT-Pages/project-approval/project-approval.component';
import { ProjectPaymentComponent } from './components/JOT-Pages/project-payment/project-payment.component';
import { ProjectDashboardComponent } from './components/JOT-Pages/project-dashboard/project-dashboard.component';
import { ProjectRegistrationComponent } from './components/JOT-Pages/project-registration/project-registration.component';
import { ProjectReportsComponent } from './components/JOT-Pages/project-reports/project-reports.component';
import { SidebarComponent } from './components/Template/sidebar/sidebar.component';
import { FooterComponent } from './components/Template/footer/footer.component';
import { NavigationnComponent } from './components/Template/navigationn/navigationn.component';
import { HeaderComponent } from './components/Template/header/header.component';
import { DashboardConsultComponent } from './components/CONSULT-Pages/dashboard-consult/dashboard-consult.component';
import { ProjectExcutionComponent } from './components/CONSULT-Pages/project-excution/project-excution.component';
import { ConsultReportComponent } from './components/CONSULT-Pages/consult-report/consult-report.component';
import { SiteMeetingMemoComponent } from './components/CONSULT-Pages/site-meeting-memo/site-meeting-memo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
import { ProfileChangePasswordComponent } from './components/profile/profile-change-password/profile-change-password.component';
import { ViewExcutionComponent } from './components/CONSULT-Pages/project-excution/view-excution/view-excution.component';
import { AddTaskComponent } from './components/CONSULT-Pages/project-excution/add-task/add-task.component';
import { TaskDetailsUpdatesComponent } from './components/CONSULT-Pages/project-excution/task-details-updates/task-details-updates.component';
import { ViewProjectComponent } from './components/JOT-Pages/project-approval/view-project/view-project.component';
import { ExternalProjectsComponent } from './components/JOT-Pages/project-registration/external-projects/external-projects.component';
import { EditProjectComponent } from './components/JOT-Pages/project-approval/edit-project/edit-project.component';
import { DeleteProjectComponent } from './components/JOT-Pages/project-approval/delete-project/delete-project.component';
import { PartialpaidComponent } from './components/JOT-Pages/project-payment/partialpaid/partialpaid.component';
import { FullpaidComponent } from './components/JOT-Pages/project-payment/fullpaid/fullpaid.component';
import { UnpaidComponent } from './components/JOT-Pages/project-payment/unpaid/unpaid.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectApprovalComponent,
    ProjectPaymentComponent,
    ProjectDashboardComponent,
    ProjectRegistrationComponent,
    ProjectReportsComponent,
    SidebarComponent,
    FooterComponent,
    NavigationnComponent,
    HeaderComponent,
    DashboardConsultComponent,
    ProjectExcutionComponent,
    ConsultReportComponent,
    SiteMeetingMemoComponent,
    ProfileComponent,
    EditprofileComponent,
    ProfileChangePasswordComponent,
    ViewExcutionComponent,
    AddTaskComponent,
    TaskDetailsUpdatesComponent,
    ViewProjectComponent,
    ExternalProjectsComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    PartialpaidComponent,
    FullpaidComponent,
    UnpaidComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    CdkAccordionModule,
    DragDropModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
