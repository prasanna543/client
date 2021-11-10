import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptor } from './interceptors';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[HeaderComponent,FooterComponent,LandingComponent],
  providers: [httpInterceptor],
})
export class CoreModule { }
