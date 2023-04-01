import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/ticket.service';
import Ticket from '../tickets';
import Bookmark from '../bookmarks';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  faTrashCan = faTrashCan;

  tickets: Ticket[] = [];

  bookmarks: Bookmark[] = [];

  constructor(private api : TicketService, private router: Router, private bookmarkAPI : BookmarkService) {


  }

  ngOnInit() : void {
    this.loadTickets();
     //  setTimeout(() => { this.ngOnInit() }, 1000)          // refreshes page every 0.01 milliseconds
  }

  loadTickets() {  
    this.api.getAllTickets().subscribe(
       (data : Ticket []) => {
            console.log(data);
            this.tickets = data;
        }); 
  }


  deleteTicket(id: number) : void {
    this.api.deleteTicket(id).subscribe(
      ()=> this.loadTickets());     
  }


  addTicket(newTicket : Ticket) {
     this.tickets.push(newTicket);
     this.loadTickets(); 
    
  }


  // add entry to Bookmark table upon button click
  addBookmark(i : number) {

    let tickets = this.tickets[i];
    
    let Bookmark = {} as Bookmark;

    Bookmark.username = tickets.openedby;
    Bookmark.detail = tickets.detail;
    Bookmark.bookmarkId= tickets.id;

     this.bookmarks.push(Bookmark);

     this.bookmarkAPI.addBookmark(Bookmark).subscribe(
      
      )}
  }

// username: string;
// detail: string;
// bookmarkId: number;