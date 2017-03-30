import {Component} from '@angular/core';
import{BookService} from './services/book.service';

@Component({
    selector: 'book',
    templateUrl: './views/books.html',
    providers: [BookService],
    moduleId: module.id
})

export class BookComponent{
    title = 'MEAN SPA with Angular 2';
    books: Array<any>;

    //constructor 
    constructor(private bookService: BookService){
        //call get as soon as component is initiated
        this.getBooks();
    }   

    //get all from our service
    getBooks(){
        this.bookService.getBooks().subscribe(response => {
            this.books = response;
        });
    } 
}
