import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/Book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  cancelBook: Book;
  constructor(public service: BookService) { }

  ngOnInit(): void {
  }
  save(): void {
    this.service.selectedBook = null;
    this.service.saveBooksInLocalStorage();
  }

}
