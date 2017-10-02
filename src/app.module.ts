import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookmarkService } from './bookmark.service';
import { BookmarkListComponent } from './bookmark-list.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, BookmarkListComponent],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
