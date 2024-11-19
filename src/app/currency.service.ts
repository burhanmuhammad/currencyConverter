import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
// 462a207ae519276dca15db562f537984
  API_KEY = "462a207ae519276dca15db562f537984";

  constructor(
    private http: HttpClient
  ) { }

  getCurrencies(){
    return this.http.get(`https://api.exchangeratesapi.io/v1/latest?access_key=${this.API_KEY}`);
  }

  
}
