import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MeComponent } from './me/me.component';
import { InboxComponent } from './inbox/inbox.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { OrgComponent } from './org/org.component';
import { Temp1IMGComponent } from './temp1-img/temp1-img.component';
import { Temp2IMGComponent } from './temp2-img/temp2-img.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent , children : 
    [{path: 'my-home', component: MyHomeComponent,},
  { path: 'me', component: MeComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'my-team', component: MyTeamComponent },
  { path: 'org', component: OrgComponent }]
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
