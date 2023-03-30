import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Ticket from './tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  baseURL : String = `http://localhost:8080/tickets`;

  constructor(private http: HttpClient) { }




getAllTickets(): Observable <Ticket[]>{
 console.log(this.http.get<Ticket[]>(`${this.baseURL}`));
  return this.http.get<Ticket[]>(`${this.baseURL}`);
};



addTicket(newTicket : Ticket) : Observable <Ticket> {
  return this.http.post<Ticket>(`${this.baseURL}`, newTicket);
};


deleteTicket(id: number) : Observable<void> {
  return this.http.delete<void>(`${this.baseURL}/${id}`);
}



}