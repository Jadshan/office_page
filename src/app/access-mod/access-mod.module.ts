import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessModRoutingModule } from './access-mod-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessModRoutingModule
  ]
})
export class AccessModModule { }
