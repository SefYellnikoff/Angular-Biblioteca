import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

@Input() newBook: Book = {

    isbn: '',
    title: '',
    author: '',
    publisher: '',
    publicationDate: new Date(),
    coverUrl: ''
  }

  constructor(private service: BookService) { }

  ngOnInit(): void {
  }
  add(){
    this.service.addBook(this.newBook);
    
  }
}
