import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {CandidatoRoutingModule} from "./candidato-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CoreModule} from "../../components/core.module";
import {MaterialModule} from "../../shared/modules/material.module";
import {CandidatoComponent} from "./candidato.component";



@NgModule({
  imports: [
    CommonModule,
    CandidatoRoutingModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    CandidatoComponent
  ],
  exports:[
    CandidatoComponent
  ]
})
export class CandidatoModule {}
