import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScheduleScreenComponent } from './schedule-screen/schedule-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScheduleComponent } from './schedule/schedule.component';
import { LocationComponent } from './location/location.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { PrizesComponent } from './prizes/prizes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MasterService } from './master.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ScheduleScreenComponent,
    HomeScreenComponent,
    ScheduleComponent,
    LocationComponent,
    GeneralInfoComponent,
    PrizesComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
