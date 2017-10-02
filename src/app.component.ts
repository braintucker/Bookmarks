import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    <table>
      <tr *ngFor="let bookmark of bookmarks">
        <td>{{bookmark.title}}</td>
      </tr>
    </table>
  `,
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkService.getBookmarks()
    .then(bookmarks => console.info(bookmarks));
  }
}
