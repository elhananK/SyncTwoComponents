import { Component, OnInit } from '@angular/core';

// Import Service 
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  constructor( private bService : BankService) { }

  // Subscribe to the BehaviorSubject
  ngOnInit(){
    this.bService.cast.subscribe();
  }
  
  // Event when chage number
  bankNumber( event : any ) {
    this.bService.setBankName(event.target.value);
  }

}
