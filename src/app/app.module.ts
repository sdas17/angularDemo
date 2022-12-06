import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { myContainer } from './myContainer/myContainer.component';
import { AppNevComponent } from './myContainer/app-nev/app-nev.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Textsection1Component } from './myContainer/textsection1/textsection1.component';
import { Textsection2Component } from './myContainer/textsection2/textsection2.component';
import { FormsModule } from '@angular/forms';
import { NumericInputComponent } from './numeric-input/numeric-input.component';
import { AppInputPsKwComponent } from './app-input-ps-kw/app-input-ps-kw.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { DemoComponent } from './demo/demo.component'; 
import { UsersService } from './users.service';
import { UserspipePipe } from './userspipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { EmployeeDashbaordComponent } from './employee-dashbaord/employee-dashbaord.component';
import { ReactiveFormsModule } from '@angular/forms';  

myContainer
@NgModule({
  declarations: [
    AppComponent,
    myContainer,
    AppNevComponent,
    HeaderComponent,
    Textsection1Component,
    Textsection2Component,
    NumericInputComponent,
    AppInputPsKwComponent,
    CustomersComponent,
    CustomersDetailComponent,
    WelcomeComponentComponent,
    DemoComponent,
    UserspipePipe,
    CrudComponent,
    EmployeeDashbaordComponent

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
