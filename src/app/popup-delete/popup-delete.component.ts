import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../shared/services/book-service.services';

@Component({
  selector: 'app-popup-delete',
  templateUrl: './popup-delete.component.html',
  styleUrls: ['./popup-delete.component.css']
})
export class PopupDeleteComponent implements OnInit {
  @Input() selectedBook: any;
  deleteBook(){
  
    // this.myBookService.selectedBook[this.index]=[];
    this.myBookService.bookInfo.items.forEach((item,index)=>{
      if(item.id==this.selectedBook){
        this.myBookService.bookInfo.items.splice(index,1)
      }
    })
  }
  constructor(private myBookService: BookService) { }

  ngOnInit() {
  }

}
