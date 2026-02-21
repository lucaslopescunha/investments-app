import { Component, computed } from '@angular/core';
import { InvestmentService } from './investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
  imports: [CurrencyPipe]

})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  results = computed(() => this.investmentService.resultsData());

  // dá no mesmo results = () => this.investmentService.resultsData();
}
