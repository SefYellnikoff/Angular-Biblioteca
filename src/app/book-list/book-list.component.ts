import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  titleBookList = 'Lista Libri Engim';
  books: Book[];

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.books= this.service.getBooks();
  }

}
