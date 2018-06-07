import { Component, OnInit } from '@angular/core';

// Import Service 
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  bankName: string;

  constructor( private bService : BankService) { }

  // Subscribe to the BehaviorSubject and return the value
  ngOnInit() {
    this.bService.cast.subscribe( name => this.bankName = name);
  }

}
