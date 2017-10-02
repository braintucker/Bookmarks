import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    ...
  `,
})
export class AppComponent {

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkService.getBookmarks()
    .then(bookmarks => console.info(bookmarks));
  }
}
