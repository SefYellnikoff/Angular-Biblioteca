import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { of, Observable } from 'rxjs';

  
  var books = [
  {
    isbn: '1234',
    title: 'King Lear',
    author: 'W.Shakespeare',
    publisher: 'Shake',
    publicationDate: new Date('1605/12/01'),
    coverUrl: 'https://static.tumblr.com/e74c4666e8cb0ddee2b2d3faef2b1c59/n00yzqy/9VBo5lhmu/tumblr_static_21n342rvsiasso4wg80ko8osg.png'
  },

  {
    isbn: '345',
    title: 'The Hitchhikers Guide to the Galaxy',
    author: 'D. Adams',
    publisher: 'Arnoldo Mondadori Editore',
    publicationDate: new Date('1979/12/01'),
    coverUrl: 'https://auth-media.s3.amazonaws.com/media/organization_2559/logo.png'
  },

  {
    isbn: '678',
    title: 'Moonwalking with Einstein',
    author: '	J.Foer',
    publisher: 'Penguin Books',
    publicationDate: new Date('2011/12/01'),
    coverUrl: 'https://bkstr.scene7.com/is/image/Bkstr/9780143120537?$NontextPDPRecsRightRail_ET$'
  },

  {
    isbn: '91011',
    title: 'Faust',
    author: 'Goethe',
    publisher: 'BUR',
    publicationDate: new Date('1831/12/01'),
    coverUrl: 'https://pbs.twimg.com/profile_images/723474336510824449/Se6RJF3l_400x400.jpg'
  }
]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: Book;
  selectedBook :Book;

  constructor() { }

  getBooks(): Observable <Book[]> {
    return of(books);
  }

  addBook(book: Book): void {
    books.push(book);
  }
  
   
}
