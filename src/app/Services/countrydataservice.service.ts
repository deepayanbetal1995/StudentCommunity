import { Injectable } from '@angular/core';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountrydataserviceService {

  //constructor() { }

  getCountries()
  {
    return [
      new Country(1, 'USA' ),
      new Country(2, 'India' ),
      new Country(3, 'Australia' )
     ];
  }
}
