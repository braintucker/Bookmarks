import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    <bookmark-edit></bookmark-edit>
    <bookmark-list [bookmarks]="bookmarks"></bookmark-list>
  `,
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkService.getBookmarks()
    .then(bookmarks => this.bookmarks = bookmarks);
  }
}
