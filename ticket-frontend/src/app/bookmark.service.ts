import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Bookmark from './bookmarks';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  baseURL : String = `http://localhost:8080/bookmarks`;

  constructor(private http: HttpClient) { }

  getAllBookmarks(): Observable <Bookmark[]>{
    console.log(this.http.get<Bookmark[]>(`${this.baseURL}`));
     return this.http.get<Bookmark[]>(`${this.baseURL}`);
   };
   
   
   
   addBookmark(newTicket : Bookmark) : Observable <Bookmark> {
     return this.http.post<Bookmark>(`${this.baseURL}`, newTicket);
   };
   
   
   deleteBookmark(id: number) : Observable<void> {
     return this.http.delete<void>(`${this.baseURL}/${id}`);
   }
   



}
