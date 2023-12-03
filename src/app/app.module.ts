import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './components/left-navbar/left-navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { DashboardContentsComponent } from './components/dashboard-contents/dashboard-contents.component';
import { TopCardsComponent } from './components/dashboard-contents/top-cards/top-cards.component';
import { RecentOrdersComponent } from './components/dashboard-contents/recent-orders/recent-orders.component';
import { NewUsersComponent } from './components/dashboard-contents/new-users/new-users.component';
import { ChartsComponent } from './components/dashboard-contents/charts/charts.component';
import { DashboardContentsService } from './components/dashboard-contents/dashboard-contents.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    TopNavbarComponent,
    DashboardContentsComponent,
    TopCardsComponent,
    RecentOrdersComponent,
    NewUsersComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DashboardContentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
