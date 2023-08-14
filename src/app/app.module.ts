import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCalculatorComponent } from './life-calculator/life-calculator.component';
import { HomeComponent } from './home/home.component';
import { RealEstateCalculatorComponent } from './real-estate-calculator/real-estate-calculator.component';
import { InvestmentCalculatorComponent } from './investment-calculator/investment-calculator.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCalculatorComponent,
    HomeComponent,
    RealEstateCalculatorComponent,
    InvestmentCalculatorComponent,
    TaxCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
