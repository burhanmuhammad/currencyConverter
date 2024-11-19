import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyService } from './currency.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import Freecurrencyapi from '@everapi/freecurrencyapi-js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatTableModule,HttpClientModule],
  providers: [CurrencyService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  currencies: { name: string; value: number; }[] = []

  originalCurrency!: string;
  convertedCurrency!: string;
  value!: number;
  convertedValue!: number;
  title = 'currency_exchange';
  subscriptions: Subscription[] = [];
  history: Array<Record<string, any>> = [];
  displayedColumns: string[] = ['fromCurrency', 'toCurrency', 'amount', 'convertedAmount', 'timestamp'];
  response!: any;
  tempResponse={
    "success": true,
    "timestamp": 1732031344,
    "base": "EUR",
    "date": "2024-11-19",
    "rates": {
      "AED": 3.890475,
      "AFN": 72.025875,
      "ALL": 98.459847,
      "AMD": 411.996425,
      "ANG": 1.90912,
      "AOA": 964.910391,
      "ARS": 1061.636458,
      "AUD": 1.625185,
      "AWG": 1.900704,
      "AZN": 1.795881,
      "BAM": 1.961519,
      "BBD": 2.138836,
      "BDT": 126.589068,
      "BGN": 1.95878,
      "BHD": 0.399294,
      "BIF": 3128.621447,
      "BMD": 1.059198,
      "BND": 1.419077,
      "BOB": 7.346627,
      "BRL": 6.114763,
      "BSD": 1.059318,
      "BTC": 1.1473991e-5,
      "BTN": 89.459351,
      "BWP": 14.412018,
      "BYN": 3.466607,
      "BYR": 20760.282278,
      "BZD": 2.135286,
      "CAD": 1.480896,
      "CDF": 3039.898513,
      "CHF": 0.934529,
      "CLF": 0.037295,
      "CLP": 1029.095697,
      "CNY": 7.667857,
      "CNH": 7.664055,
      "COP": 4658.289584,
      "CRC": 538.485197,
      "CUC": 1.059198,
      "CUP": 28.068749,
      "CVE": 110.587416,
      "CZK": 25.270367,
      "DJF": 188.629948,
      "DKK": 7.460059,
      "DOP": 63.795996,
      "DZD": 141.133928,
      "EGP": 52.440681,
      "ERN": 15.887971,
      "ETB": 130.379312,
      "EUR": 1,
      "FJD": 2.401891,
      "FKP": 0.836043,
      "GBP": 0.836184,
      "GEL": 2.886272,
      "GGP": 0.836043,
      "GHS": 16.874676,
      "GIP": 0.836043,
      "GMD": 75.20249,
      "GNF": 9129.617256,
      "GTQ": 8.178075,
      "GYD": 221.515826,
      "HKD": 8.243686,
      "HNL": 26.765033,
      "HRK": 7.555534,
      "HTG": 139.155706,
      "HUF": 407.081749,
      "IDR": 16794.909483,
      "ILS": 3.962137,
      "IMP": 0.836043,
      "INR": 89.393773,
      "IQD": 1387.645659,
      "IRR": 44584.293352,
      "ISK": 145.491187,
      "JEP": 0.836043,
      "JMD": 168.00983,
      "JOD": 0.75129,
      "JPY": 163.081572,
      "KES": 136.900981,
      "KGS": 91.573335,
      "KHR": 4302.666222,
      "KMF": 492.262232,
      "KPW": 953.277866,
      "KRW": 1474.705555,
      "KWD": 0.32564,
      "KYD": 0.882774,
      "KZT": 525.657434,
      "LAK": 23226.373978,
      "LBP": 94861.955352,
      "LKR": 308.198548,
      "LRD": 192.792082,
      "LSL": 19.152338,
      "LTL": 3.127536,
      "LVL": 0.640698,
      "LYD": 5.167064,
      "MAD": 10.583757,
      "MDL": 19.252129,
      "MGA": 4951.576489,
      "MKD": 61.576455,
      "MMK": 3440.234032,
      "MNT": 3599.155003,
      "MOP": 8.492359,
      "MRU": 42.158914,
      "MUR": 49.020342,
      "MVR": 16.374868,
      "MWK": 1836.855323,
      "MXN": 21.400726,
      "MYR": 4.7378,
      "MZN": 67.709223,
      "NAD": 19.152338,
      "NGN": 1777.217505,
      "NIO": 38.983656,
      "NOK": 11.625504,
      "NPR": 143.135363,
      "NZD": 1.795026,
      "OMR": 0.407802,
      "PAB": 1.059318,
      "PEN": 4.02002,
      "PGK": 4.262427,
      "PHP": 62.351282,
      "PKR": 294.376249,
      "PLN": 4.32836,
      "PYG": 8250.0529,
      "QAR": 3.863263,
      "RON": 4.976372,
      "RSD": 116.992648,
      "RUB": 106.527306,
      "RWF": 1457.048001,
      "SAR": 3.976296,
      "SBD": 8.864979,
      "SCR": 14.39143,
      "SDG": 637.109467,
      "SEK": 11.590079,
      "SGD": 1.417414,
      "SHP": 0.836043,
      "SLE": 23.990385,
      "SLL": 22210.859059,
      "SOS": 605.382129,
      "SRD": 37.642308,
      "STD": 21923.261649,
      "SVC": 9.269024,
      "SYP": 2661.26679,
      "SZL": 19.147366,
      "THB": 36.553978,
      "TJS": 11.260229,
      "TMT": 3.707193,
      "TND": 3.337731,
      "TOP": 2.480748,
      "TRY": 36.573787,
      "TTD": 7.193175,
      "TWD": 34.301066,
      "TZS": 2811.092599,
      "UAH": 43.732903,
      "UGX": 3900.371472,
      "USD": 1.059198,
      "UYU": 45.472575,
      "UZS": 13585.608629,
      "VES": 48.439322,
      "VND": 26908.927106,
      "VUV": 125.750124,
      "WST": 2.956848,
      "XAF": 657.893713,
      "XAG": 0.033988,
      "XAU": 0.000404,
      "XCD": 2.862536,
      "XDR": 0.805749,
      "XOF": 657.875024,
      "XPF": 119.331742,
      "YER": 264.640325,
      "ZAR": 19.108674,
      "ZMK": 9534.052218,
      "ZMW": 29.264148,
      "ZWL": 341.061348
    }
  }
  constructor(
    private _currencyService: CurrencyService
  ) {

  }

  ngOnInit(): void {
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history') || '[]') : [];
    //   const freecurrencyapi = new Freecurrencyapi('4E0VK7BnkdeUuh1vegAt808v2IUjzUR6lxcvBMT2');

    //   freecurrencyapi.latest({
    //     base_currency: 'USD',
    //     currencies: 'EUR'
    // }).then((response : any) => {
    //     console.log(response);
    // });

    //   throw new Error('Method not implemented.');
    this.getCurriencies();
    this.extractCurrencies(this.tempResponse);
  }

  ngOnDestroy() {
    this.subscriptions.map((sub) => sub.unsubscribe);
  }

  getCurriencies() {
    this.subscriptions.push(
      this._currencyService.getCurrencies().subscribe({
        next: (res: any) => {
          console.log(res);
          this.response = res;
          this.extractCurrencies(this.response);
        },
        error: (error) => {

        }
      }));
  }

  maintainHistory() {
    const historyObject = {
      fromCurrency: this.originalCurrency,
      toCurrency: this.convertedCurrency,
      amount: this.value,
      convertedAmount: this.convertedValue,
      timestamp: new Date()
    }
    this.history.push(historyObject);
    localStorage.removeItem('history');
    localStorage.setItem('history', JSON.stringify(this.history));
    this.history = [];
    this.history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history') || '[]') : [];
  }

   extractCurrencies(response: any){
    this.response = response;
    this.currencies = [];
    Object.keys(this.response.rates).map(key => {
      let object = {
        name: key,
        value: this.response.rates[key as keyof object]
      }
      this.currencies.push(object);
    });
  }

convertCurrency(fromCurrency: string, toCurrency: string) {
  this.convertedValue = +((this.response.rates[toCurrency] / this.response.rates[fromCurrency]) * this.value).toFixed(2);
  this.maintainHistory();
}

}
