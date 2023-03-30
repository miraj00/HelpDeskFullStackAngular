import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TicketService } from '../ticket.service';
import Ticket from '../tickets';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})

export class NewTicketComponent implements OnInit {

  @Output () TicketSave = new EventEmitter<Ticket>();
  
  newTicket:Ticket = ({} as any) as Ticket;

  constructor(private ticketAPI : TicketService) {}

  ngOnInit(): void {}
  
  addNewTicket(){
    this.ticketAPI.addTicket(this.newTicket).subscribe(
      ()=> {
          this.newTicket.open = true;
         
          this.TicketSave.emit(
            
            this.newTicket
            );

          this.newTicket =({} as any) as Ticket;
      })
  }



}
