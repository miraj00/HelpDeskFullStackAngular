import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import Ticket from '../tickets';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent {


  editedTicket:Ticket = ({} as any) as Ticket;


  constructor(private ticketAPI : TicketService, private router: Router) {}


   editTicket() {

    this.ticketAPI.putTicket(this.editedTicket).subscribe(
     ()=> console.log("Request being sent")
    )}

//     let ticket = {} as Ticket; 
    
//  //   let Bookmark = {} as Bookmark;

//     ticket.id = tickets.id;
//     ticket.resolution = tickets.resolution;
//     ticket.closedby= tickets.closedby;

//      this.tickets.push(ticket);

//      this.bookmarkAPI.addBookmark(Bookmark).subscribe(
      
//       )}





}
