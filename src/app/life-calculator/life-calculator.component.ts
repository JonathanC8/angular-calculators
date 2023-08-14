import { ImplicitReceiver } from '@angular/compiler';
import { Component, ViewChild, DoCheck, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-life-calculator',
  templateUrl: './life-calculator.component.html',
  styleUrls: ['./life-calculator.component.css']
})
export class LifeCalculatorComponent implements OnInit{
biWeeklyIncome: number= 0;
monthlyIncome: number=0;
annualIncome: number=0;
taxPercentages: Array<number>= [0.10,0.12,0.22,0.24,0.32,0.35,0.37]
taxAddition: Array<number>= [0,1100,5417,16290,37104,52832,174238.25]
taxPercent:number=0.1;
ssTax:number=0.062
additionalTax:number=0;
taxedBiWeekly:number= 0;
taxedMonthlyIncome:number=0;
taxedAnnualIncome:number=0;
taxType:string="";
taxBracket:number=0;
rentMin:number=0;
minPay:number=0;
minHour:number=0;
expenses:number=1;
totalExpenses:number=0;
leftOver:number = 0;

  protected calculateIncome(){
    let moneyHr = parseFloat((<HTMLInputElement>document.getElementById('moneyhr')).value)
    let hours = parseFloat((<HTMLInputElement>document.getElementById('hours')).value)
    this.biWeeklyIncome = (hours*moneyHr)*2
    this.monthlyIncome = this.biWeeklyIncome*2
    this.annualIncome = this.biWeeklyIncome*26
    let taxpercent = this.calculateTaxes()
    this.calculateMinimums(hours, moneyHr, taxpercent)
    if((<HTMLInputElement>document.getElementById('expense1')).value != ""){
      this.calculateExpenses()
    }
  }

  protected calculateTaxes(){
    this.taxType = (<HTMLInputElement>document.getElementById('tax-type')).value
    this.taxBracket = parseFloat((<HTMLInputElement>document.getElementById('tax-bracket')).value)
    if(this.taxType == 'W-2'){
      this.ssTax = 0.062
      this.taxPercent = this.taxPercentages[this.taxBracket]+this.ssTax
      this.additionalTax = this.taxAddition[this.taxBracket]
    }else{
      this.ssTax = 0.124
      this.taxPercent = this.taxPercentages[this.taxBracket]+this.ssTax
      this.additionalTax = this.taxAddition[this.taxBracket]
    }
    this.taxedBiWeekly = (this.biWeeklyIncome/(1+this.taxPercent))
    this.taxedMonthlyIncome = (this.monthlyIncome/(1+this.taxPercent))
    this.taxedAnnualIncome = (this.annualIncome/(1+this.taxPercent))
    return this.taxPercent;
  }

 protected calculateMinimums(hours:number, moneyHr:number, taxpercent:number){
  this.rentMin = parseFloat((<HTMLInputElement>document.getElementById('rent-cost')).value)*3
  this.minPay = ((this.rentMin/4)/hours)*(1+taxpercent)
  this.minHour = ((this.rentMin/4)/moneyHr)*(1+taxpercent)

 }

 protected createExpense(){
  this.expenses+=1;
  let expenseDiv = document.getElementById('expense-list')
  let newExpense = document.createElement('div')
  newExpense.id = "expense"+this.expenses
  newExpense.innerHTML = "<input type='text' id='expenseName"+this.expenses+"' placeholder='expense name' style='width:200px'><input type='number' id='expenseCost"+this.expenses+"' placeholder='200' style='width:100px;'>"
  expenseDiv?.appendChild(newExpense)
  }
 protected deleteExpense(){
  let expenseDelete = document.getElementById('expense'+this.expenses)
  expenseDelete?.remove()
  this.expenses-=1;
 }

 protected calculateExpenses(){
  this.totalExpenses = 0;
  for(let i=1; i<= this.expenses; i++){
    let expenseCost = parseFloat((<HTMLInputElement>document.getElementById('expenseCost'+String(i))).value)
    this.totalExpenses+=expenseCost
  }
  this.leftOver = this.monthlyIncome-(this.totalExpenses+this.rentMin/3)
 }

  ngOnChanges():void{

  }

  ngDoCheck(): void{

  }

  ngOnInit(): void{
  }

}
