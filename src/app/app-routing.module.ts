import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultReportComponent } from './components/CONSULT-Pages/consult-report/consult-report.component';
import { DashboardConsultComponent } from './components/CONSULT-Pages/dashboard-consult/dashboard-consult.component';
import { ProjectExcutionComponent } from './components/CONSULT-Pages/project-excution/project-excution.component';
import { ViewExcutionComponent } from './components/CONSULT-Pages/project-excution/view-excution/view-excution.component';
import { SiteMeetingMemoComponent } from './components/CONSULT-Pages/site-meeting-memo/site-meeting-memo.component';
import { ProjectApprovalComponent } from './components/JOT-Pages/project-approval/project-approval.component';
import { ProjectDashboardComponent } from './components/JOT-Pages/project-dashboard/project-dashboard.component';
import { ProjectPaymentComponent } from './components/JOT-Pages/project-payment/project-payment.component';
import { ProjectRegistrationComponent } from './components/JOT-Pages/project-registration/project-registration.component';
import { ProjectReportsComponent } from './components/JOT-Pages/project-reports/project-reports.component';
import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
import { ProfileChangePasswordComponent } from './components/profile/profile-change-password/profile-change-password.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProjectDashboardComponent},
  { path: 'approv', component: ProjectApprovalComponent},
  { path: 'excute', component: ProjectExcutionComponent},
  { path: 'pay', component: ProjectPaymentComponent},
  { path: 'reg', component: ProjectRegistrationComponent},
  { path: 'report', component: ProjectReportsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'prof-edit', component: EditprofileComponent},
  { path: 'password', component: ProfileChangePasswordComponent},
  { path: 'cons-dash', component: DashboardConsultComponent},
  { path: 'excute-view', component: ViewExcutionComponent},
  { path: 'consult-report', component: ConsultReportComponent},
  { path: 'memo', component: SiteMeetingMemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
