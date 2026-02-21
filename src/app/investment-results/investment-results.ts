import { Component } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  get results() { 
    return this.investmentService.resultsData
  };

  // dá no mesmo results = () => this.investmentService.resultsData();
}
