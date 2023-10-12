import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {FeaturesModule} from "./features/features.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FeaturesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
