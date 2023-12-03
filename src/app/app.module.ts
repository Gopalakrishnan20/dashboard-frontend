import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './components/left-navbar/left-navbar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { DashboardContentsComponent } from './components/dashboard-contents/dashboard-contents.component';
import { TopCardsComponent } from './components/dashboard-contents/top-cards/top-cards.component';
import { RecentOrdersComponent } from './components/dashboard-contents/recent-orders/recent-orders.component';
import { NewUsersComponent } from './components/dashboard-contents/new-users/new-users.component';
import { ChartsComponent } from './components/dashboard-contents/charts/charts.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
