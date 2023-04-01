import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from '@angular/router';
import { BookmarkService } from "../bookmark.service";
import Bookmark from '../bookmarks';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: Bookmark[] = [];


  newBookmark: Bookmark = ({} as any) as Bookmark;

  @Output () BookmarkSave = new EventEmitter<Bookmark>();

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

  deleteBookmark(id: number) : void {
    this.api.deleteBookmark(id).subscribe(
      ()=> this.loadBookmarks());     
  }

  addBookmark(newBookmark : Bookmark) {
     this.bookmarks.push(newBookmark);
     this.loadBookmarks(); 
    
  }

  // emiting bookmark 
  addNewBookmark(){
    this.api.addBookmark(this.newBookmark).subscribe(
      ()=> {
                
          this.BookmarkSave.emit(
            
            this.newBookmark
            );

          this.newBookmark =({} as any) as Bookmark; 
      })
  }



}
