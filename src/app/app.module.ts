import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { RegisterComponent } from './register/register.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [CookieService],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
