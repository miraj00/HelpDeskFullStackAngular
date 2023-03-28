import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTicketComponent,
    BookmarkListComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
