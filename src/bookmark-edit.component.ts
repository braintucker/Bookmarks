import { Component, Input } from '@angular/core';

@Component({
  selector: 'bookmark-edit',
  template: `
    <div class="panel panel-default">
      Edit...
    </div>
  `,
})
export class BookmarkEditComponent {

  @Input() bookmarks = [];

}
