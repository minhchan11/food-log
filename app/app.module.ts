import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodTileComponent } from './food-tile';
import { FoodEditComponent } from './food-edit';
import { FoodNewComponent } from './food-new';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FoodTileComponent,
        FoodEditComponent,
        FoodNewComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
