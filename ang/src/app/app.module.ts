import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Products } from './model/products';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { 
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule
 } from '@angular/material';

 import { ProServiceService } from './service/pro-service.service';
 import { MatRadioModule } from '@angular/material/radio';  
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
 import { HttpClientModule, HttpClient } from '@angular/common/http';  

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule
  ],
  providers: [HttpClientModule,ProServiceService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
