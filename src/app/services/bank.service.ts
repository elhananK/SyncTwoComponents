import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Import BehaviorSubject from rxjs
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';

import { map } from "rxjs/operators";

import { IBank } from '../interface/bank.interface';


@Injectable()
export class BankService {


  public bank: IBank[];

  // Create BehaviorSubject Trigger
  private bankName = new BehaviorSubject<string> (' ');
  cast = this.bankName.asObservable();


  constructor( private http: HttpClient ) { }
  
  // HTTP Request from in-memory-data
  getBanks(): Observable<void> {
    
    return this.http
      .get('api/books')
      .pipe(map(data => {
        this.bank = data as IBank[];
        console.log(this.bank);
      }));
      };
  

  getBankNamefromId(id){
    // find bank name
    var name = this.bank.find((bname) => bname.id == id)
    ? this.bank.find((bname) => bname.id == id).name : " ";   
    
    // Trigger non-child component
    this.bankName.next(name);
  }
    
  




}

