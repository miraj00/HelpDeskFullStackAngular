import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';
import Tickets from '../tickets';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {
  
  constructor(private route: ActivatedRoute, private api: TicketService){
  }

  loading:boolean = true;
 
  id:number = -1; 
  ticketInfo: Tickets=({} as any) as Tickets;
 
  //Called when the component gets loaded 
 ngOnInit(){
   let idstring:string|null =  this.route.snapshot.paramMap.get('id'); 

      if(idstring !== null){
       
          this.id = parseInt(idstring);
          console.log(this.id);
        
          this.api.getTicketDetail(this.id).subscribe(
              (TicketResult) => {
                  this.ticketInfo = TicketResult;
                  this.loading = false;
               }
          );
      }
  }


}

