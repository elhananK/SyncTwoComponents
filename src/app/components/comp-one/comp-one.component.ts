import { Component, OnInit } from '@angular/core';
// Import Service 
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent  implements OnInit{

  constructor( private bService : BankService) { }
  
  // On start get all banks from servers
  ngOnInit(){
    this.bService.getBanks().subscribe();

  }
  // Event when change number
  bankNumber( event : any ) {
    this.bService.getBankNamefromId(event.target.value);
  }

}
