import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"", component: TicketListComponent}, 
  {path:"ticketDetail/:id", component: TicketDetailComponent},
  {path:"addTicket", component: NewTicketComponent},
  {path:"showBookMarks", component: BookmarkListComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTicketComponent,
    BookmarkListComponent,
    TicketDetailComponent,
    TicketListComponent,
    HeaderComponent
    

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
