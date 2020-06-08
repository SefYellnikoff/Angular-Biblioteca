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

  errors = {
    isbn: "",
    title: "",
    author: "",
    publisher: "",
  }

  reset(): void {
    this.newBook = {
      isbn: '',
      title: '',
      author: '',
      publisher: '',
      publicationDate: new Date(),
      coverUrl: 'https://marketplace.canva.com/cI4v0/MADyRacI4v0/1/s2/canva-opened-book-MADyRacI4v0.jpg'
    };
  }
  add() {

    let result = true;

    if (this.newBook.isbn.length != 13) {
      this.errors.isbn = " Questo campo deve essere esattamente di 13 cifre";
       console.log(this.newBook.publicationDate)
      result = false;
    } else {
      this.errors.isbn = "";
    }

    if (this.newBook.title.length == 0) {

      this.errors.title = "Campo obbligatorio";
      result = false;
    } else {
      this.errors.title = "";
    }

    if (this.newBook.author.length == 0) {
      this.errors.author = "Anche questo è un campo obbligatorio";
      result = false;
    } else {
      this.errors.author = "";
    }
    if (this.newBook.publisher.length == 0) {
      this.errors.publisher = "Scrivi qualcosa, bitchiiiess";
      result = false;
    } else {
      this.errors.publisher = "";
    }

    if(result) {
      this.service.addBook(this.newBook);
      this.reset();
    }


  }
}
