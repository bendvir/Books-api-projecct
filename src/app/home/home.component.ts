import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  shopImg: string = "./assets/images/book_home_page.png";
  addressArray: string[] = [
      "50 Ashalom st.",
      "Tel-Aviv",
      "Israel"];
}
