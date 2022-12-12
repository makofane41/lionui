import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveinfoComponent } from './leaveinfo/leaveinfo.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';

const routes: Routes = [
  {path:'leaveinfo',component:LeaveinfoComponent},
  {path:'leaverequest',component:LeaverequestComponent},
  { path: '',   redirectTo: 'leaveinfo', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
