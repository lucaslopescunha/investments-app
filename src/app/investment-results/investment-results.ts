import { CurrencyPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  constructor(private investmentService: InvestmentService) {}
  results = computed(() => this.investmentService.resultsData());
}
