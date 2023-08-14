import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeCalculatorComponent } from './life-calculator/life-calculator.component';
import { RealEstateCalculatorComponent } from './real-estate-calculator/real-estate-calculator.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'life-calculator', component: LifeCalculatorComponent},
  {path: 'real-estate-calculator', component: RealEstateCalculatorComponent},
  {path: 'tax-calculator', component: TaxCalculatorComponent},
  {path: 'investment-calculator', component: InvestmentCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
