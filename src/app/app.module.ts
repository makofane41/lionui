import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveinfoComponent } from './leaveinfo/leaveinfo.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaveinfoComponent,
    LeaverequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
