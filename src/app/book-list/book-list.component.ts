import { Component } from '@angular/core';
import { RootObject } from "./../shared/models/book-root-object.model";
import { BookService } from '../shared/services/book-service.services';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
    public localBookData: RootObject;
    selectedBook: any;
    errorEmptyMsg=false;
   
    
    public editBook(bookId: string): void {
        for (let i of this.localBookData.items) {
            if (i.id == bookId) {
                this.myBookService.selectedBook.selected = i; // the original Object
                this.selectedBook = JSON.parse(JSON.stringify(i)); // new object for saving the data
            }
        }
    }
    public deleteBook(bookId:string): void {
        for (let i of this.localBookData.items) {
            if (i.id == bookId) {
                this.myBookService.selectedBook.selected = i; // the original Object
                this.selectedBook = JSON.parse(JSON.stringify(i.id)); // new object for saving the data
            }
        }    
    }

    public shortTitle(title: string): string {
        if (title.length > 13) {
            return title.substring(0, 13) + "...";
        }
        return title;
    }
    // init the orignal object 
   
    public constructor(private myBookService: BookService) {
        this.localBookData = this.myBookService.bookInfo;
        //this.selectedBook = this.myBookService.selectedBook;

        for (let i = 0; i < this.localBookData.items.length; i++) {
            let temp: string = this.localBookData.items[i].volumeInfo.title;
            this.localBookData.items[i].volumeInfo.title = temp.substring(0, 16);
        }
    }


}
