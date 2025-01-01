import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignatureComponent } from './signature.component';



@NgModule({
  imports: [
    CommonModule,
    SignatureComponent
  ], 
  exports: [SignatureComponent]
})
export class SignatureModule { }
