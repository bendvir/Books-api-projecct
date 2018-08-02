import { Component, OnInit, Input} from '@angular/core';
import { BookService } from '../shared/services/book-service.services';


@Component({
  selector: 'app-popup-edit',
  templateUrl: './popup-edit.component.html',
  styleUrls: ['./popup-edit.component.css']
})
export class PopupEditComponent implements OnInit {
  @Input() selectedBook: any;        
    errorAllreadyExist=false; 
    errorEmptyMsg = false;
  public saveFields() { 
    this.errorEmptyMsg = false;
    let strValid = /^[a-zA-Z(\s)0-9]+$/;
    let datePattern= /^[12][0-9]{3}$/     
    if(this.selectedBook.volumeInfo.title === "" || this.selectedBook.volumeInfo.authors[0] ==="" || this.selectedBook.volumeInfo.publishedDate===""){
      this.errorEmptyMsg = true;
      }
     
      else if (!datePattern.test(this.selectedBook.volumeInfo.publishedDate) || !strValid.test(this.selectedBook.volumeInfo.title) || !strValid.test(this.selectedBook.volumeInfo.authors[0])){
        this.errorEmptyMsg = true;
      }
       
      let bookItem = this.myBookService.bookInfo.items.find(x=>{
        return x.volumeInfo.title.indexOf(this.selectedBook.volumeInfo.title)>-1 && this.selectedBook.id!=x.id        
      })
      if(bookItem){
        this.errorAllreadyExist = true;
      }
      if(!bookItem){
        if(this.errorEmptyMsg == false){
          this.errorAllreadyExist = false;          
          this.myBookService.selectedBook.selected.volumeInfo.title = this.selectedBook.volumeInfo.title;
          this.myBookService.selectedBook.selected.volumeInfo.authors[0] = this.selectedBook.volumeInfo.authors[0];
          this.myBookService.selectedBook.selected.volumeInfo.publishedDate = this.selectedBook.volumeInfo.publishedDate;
        }            
    }   
   return false;
}
  constructor(private myBookService: BookService) { }
  
  ngOnInit() {
}

}
