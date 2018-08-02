import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../shared/services/book-service.services';
import { Book } from '../shared/models/book.model';

@Component({
  selector: 'app-popup-add-new-book',
  templateUrl: './popup-add-new-book.component.html',
  styleUrls: ['./popup-add-new-book.component.css']
})
export class PopupAddNewBookComponent implements OnInit {

  book: Book;
  errorAllreadyExist = false;
  errorEmptyMsg = false;
  addBook() {
    this.errorEmptyMsg = false;
    let strValid = /^[a-zA-Z(\s)0-9]+$/;
    let datePattern = /^[12][0-9]{3}$/
    this.errorAllreadyExist = false;
    this.errorEmptyMsg = false;
    if (this.book.volumeInfo.title === "" || this.book.volumeInfo.authors[0] === "" || this.book.volumeInfo.publishedDate === "") {
      this.errorEmptyMsg = true;
    }    
    else if (!datePattern.test(this.book.volumeInfo.publishedDate) || !strValid.test(this.book.volumeInfo.title) || !strValid.test(this.book.volumeInfo.authors[0])) {
      this.errorEmptyMsg = true;
    }
    else {

      let bookItem = this.myBookService.bookInfo.items.find(x => {
        return x.volumeInfo.title.toLowerCase().indexOf(this.book.volumeInfo.title.toLowerCase()) > -1
      })
      if (bookItem) {
        this.errorAllreadyExist = true;
      }
      if (!bookItem) {
        if (this.errorEmptyMsg == false) {
          this.book.id = '_' + Math.random().toString(36).substr(2, 9);
          this.myBookService.bookInfo.items.unshift(JSON.parse(JSON.stringify(this.book)));
          this.book = {
            id: "",
            volumeInfo: {}
          }
        }
      }

    }

  }
  constructor(private myBookService: BookService) {
    this.book = {
      id: "",
      volumeInfo: {}
    }
  }

  ngOnInit() {
  }

}
