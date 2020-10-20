import {NgModule} from '@angular/core';
import { TecnicaComponent } from 'src/app/feature/tecnica/tecnica.component';
import {CommonModule} from '@angular/common';
import {TecnicaRoutingModule} from 'src/app/feature/tecnica/tecnica-routing.module';

@NgModule({
  declarations: [TecnicaComponent],
  imports: [CommonModule, TecnicaRoutingModule],
})
export class TecnicaModule { }
