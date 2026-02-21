import { NgModule } from "@angular/core";
import { AppComponent } from "./app";
import { HeaderComponent } from "./header/header";
import { UserInputComponent } from "./user-input/user-input";
import { InvestmentResultsComponent } from "./investment-results/investment-results";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, // Include pipes, ngIf, ngFor
        UserInputModule
    ]
})
export class AppModule {

}