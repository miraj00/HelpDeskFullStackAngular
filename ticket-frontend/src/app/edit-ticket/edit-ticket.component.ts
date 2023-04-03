import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import  Ticket  from '../tickets';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

   id: number = 0;

   
  editedTicket:Ticket = ({} as any) as Ticket;

  constructor(private ticketAPI : TicketService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];

    this.ticketAPI.getTicketDetail(this.id).subscribe(
      (TicketResult) => {
        this.editedTicket=TicketResult;
        // this.ticketInfo = TicketResult;
          // this.loading = false;
       }
  );

  }


   editTicket() {
    // console.log(this.editedTicket);
    this.ticketAPI.putTicket(this.id, this.editedTicket)
      .subscribe( data => {
      //  console.log(data);


      this.gotolistPage();  
      })
    }
       

  onSubmit(){
    this.editTicket();
  }  

gotolistPage(){
  this.router.navigate(['']);
}
}
