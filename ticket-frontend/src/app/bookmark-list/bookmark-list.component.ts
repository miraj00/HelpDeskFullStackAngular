import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { BookmarkService } from "../bookmark.service";
import Bookmark from '../bookmarks';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent {

  bookmarks: Bookmark[] = [];

  constructor(private api : BookmarkService, private router: Router) {}

  ngOnInit() : void {
    this.loadBookmarks();
    
  }

  loadBookmarks() {
    this.api.getAllBookmarks().subscribe(
      (data : Bookmark []) => {
           console.log(data);
           this.bookmarks = data;
       }); 
  }


  deleteTicket(id: number) : void {
    this.api.deleteBookmark(id).subscribe(
      ()=> this.loadBookmarks());     
  }


  addTicket(newBookmark : Bookmark) {
     this.bookmarks.push(newBookmark);
     this.loadBookmarks(); 
    
  }


}
