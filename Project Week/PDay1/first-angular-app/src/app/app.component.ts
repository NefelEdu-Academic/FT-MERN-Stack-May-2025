import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from "./my-component/my-component.component";
import { CommonModule } from '@angular/common';
import { Book } from './interfaces/book';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MyComponentComponent, RouterOutlet],
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  appTitle: string = 'My First Angular App';
  allBooks: Book[] = []
  onNotify(books: Book[]){
    this.allBooks = books
  }
}
