import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent {
income:number=0;
incomeTaxed:number=0;
capitalGains:number=0;
owedToSocial:number=0;
owedToFederal:number=0;
owedToState:number=0;
taxBracket:String = "";


  protected calculate(){

  }
}
