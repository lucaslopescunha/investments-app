import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserInputComponent } from './user-input/user-input';
import { InvestmentResults } from "./investment-results/investment-results";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {


// two possible values

}
