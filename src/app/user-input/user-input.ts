import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment-results/investment.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
  imports: [FormsModule]
})
export class UserInputComponent {
  

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.initialInvestment(),
      annualInvestment: + this.annualInvestment(),
      expectedReturn: + this.expectedReturn(),
      duration: + this.duration()
    });
    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
