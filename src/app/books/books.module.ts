import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book.reducer';
import { HomeComponent } from './home/home.component';
import { BookEffects } from './store/book.effects';
import { EffectsModule } from '@ngrx/effects';
import { AddBookComponent } from './add-book/add-book.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('myBooks',bookReducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
