//dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

//reference our app component
import {BookComponent} from './book.component';

@NgModule({
    declarations: [BookComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [],
    bootstrap: [BookComponent]
})

export class AppModule {}