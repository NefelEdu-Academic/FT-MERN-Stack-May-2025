import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { Book } from '../interfaces/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {
  @Input() parentMessage: string = "";

  @Output() notifyParent = new EventEmitter<Book[]>()

  sendBooks(){
    this.notifyParent.emit(this.books)
  }

  message: string = 'Welcome to My New Component';
  books: Book[] = [
    {
      _id: 'a12a233z56',
      author: 'author 1',
      nbOfPages: 200,
      title: 'title 1',
      image: 'rdfghjkledfvgbhj',
    },
    {
      _id: 'b66455d6g1hy',
      author: 'author 2',
      nbOfPages: 100,
      title: 'title 2',
    },
    {
      _id: 'hed565fg6gt564',
      title: 'title 3',
      author: 'author 3',
      nbOfPages: 300,
    },
  ];
}
