import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewTicketComponent,
    BookmarkListComponent,
    TicketDetailComponent,
    TicketListComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
