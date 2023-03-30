import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/ticket.service';
import Ticket from '../tickets';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {

  faTrashCan = faTrashCan;

  tickets: Ticket[] = [];

  constructor(private api : TicketService, private router: Router) {}

  ngOnInit() : void {
    this.loadTickets();
    
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


}
