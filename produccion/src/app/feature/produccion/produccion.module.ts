import {NgModule} from '@angular/core';
import { ProduccionComponent } from './produccion.component';
import {CommonModule} from '@angular/common';
import {ProduccionRoutingModule} from './produccion-routing.module';

@NgModule({
  declarations: [ProduccionComponent],
  imports: [CommonModule, ProduccionRoutingModule],
})
export class ProduccionModule { }
