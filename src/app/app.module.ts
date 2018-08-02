import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './shared/services/book-service.services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupEditComponent } from './popup-edit/popup-edit.component';
import { PopupDeleteComponent } from './popup-delete/popup-delete.component';
import { PopupAddNewBookComponent } from './popup-add-new-book/popup-add-new-book.component';
import { TitleFilterPipe } from './shared/pipes/filter-array.pipe';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookListComponent },


  //default path - will redirect the current path to 'home'
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // ** is an angular placeholder for any path that does not exist
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    MainComponent,
    BookListComponent,
    HomeComponent,
    PageNotFoundComponent,
    PopupEditComponent,
    PopupDeleteComponent,
    PopupAddNewBookComponent,
    TitleFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
