import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TempComponent } from './temp/temp.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MeComponent } from './me/me.component';
import { InboxComponent } from './inbox/inbox.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { OrgComponent } from './org/org.component';
import { Temp1IMGComponent } from './temp1-img/temp1-img.component';
import { Temp2IMGComponent } from './temp2-img/temp2-img.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TempComponent,
    MyHomeComponent,
    MeComponent,
    InboxComponent,
    MyTeamComponent,
    OrgComponent,
    Temp1IMGComponent,
    Temp2IMGComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
