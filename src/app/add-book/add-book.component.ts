import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook: Book = {

    isbn: '',
    title: '',
    author: '',
    publisher: '',
    publicationDate: new Date(),
    coverUrl: 'https://marketplace.canva.com/cI4v0/MADyRacI4v0/1/s2/canva-opened-book-MADyRacI4v0.jpg'
  }

  constructor(private service: BookService) { }

  ngOnInit(): void {
  }
  add() {
    this.service.addBook(this.newBook);

  }
}
