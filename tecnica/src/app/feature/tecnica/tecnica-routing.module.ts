import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TecnicaComponent} from 'src/app/feature/tecnica/tecnica.component';

const routes: Routes = [{ path: '', component: TecnicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicaRoutingModule { }
