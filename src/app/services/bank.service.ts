import { Injectable } from '@angular/core';

// Import BehaviorSubject from rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Hash Table O(1) --- (Don't need to run all the array O(n) )
const Bname =  [
  {id: 99, name: 'בנק ישראל'},
  {id: 12, name: 'בנק הפועלים'},
  {id: 10, name: 'בנק לאומי'},
  {id: 11, name: 'בנק דיסקונט'},
  {id: 20, name: 'בנק מזרחי טפחות'},
  {id: 31, name: 'הבנק הבינלאומי הראשון'},
  {id: 14, name: 'בנק אוצר החייל'},
  {id: 17, name: 'בנק מרכנתיל דיסקונט'},
  {id: 9, name: 'בנק הדואר'},
  {id: 13, name: 'בנק איגוד'}
];



@Injectable()
export class BankService {

  // Create BehaviorSubject Trigger
  private bankName = new BehaviorSubject<string> (' ');
  cast = this.bankName.asObservable();

  constructor() { }

  
  
  // Trigger Component Two with Bank name
  setBankName (id) {

    // get name from Bname Object
    var name = Bname.find((bname) => bname.id == id) 
    ? Bname.find((bname) => bname.id == id).name : " ";
    
    // Trigger
    this.bankName.next(name);

  };


  
}
