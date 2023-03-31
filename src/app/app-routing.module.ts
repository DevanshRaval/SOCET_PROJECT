import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MeComponent } from './me/me.component';
import { InboxComponent } from './inbox/inbox.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { OrgComponent } from './org/org.component';
import { Temp1IMGComponent } from './temp1-img/temp1-img.component';
import { Temp2IMGComponent } from './temp2-img/temp2-img.component';

const routes: Routes = [
  {
    path: 'my-home', component: MyHomeComponent,
    children:
      [{ path: 'temp1-img', component: Temp1IMGComponent },
      { path: 'temp2-img', component: Temp2IMGComponent },
       
      ]


  },
  { path: 'me', component: MeComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'my-team', component: MyTeamComponent },
  { path: 'org', component: OrgComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
