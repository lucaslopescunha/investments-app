import { Component } from '@angular/core';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInputComponent {
  

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.initialInvestment,
      annualInvestment: + this.annualInvestment,
      expectedReturn: + this.expectedReturn,
      duration: + this.duration
    });
    this.initialInvestment = '0';
    this.annualInvestment ='0';
    this.expectedReturn = '5';
    this.duration = '10';
  }
}
