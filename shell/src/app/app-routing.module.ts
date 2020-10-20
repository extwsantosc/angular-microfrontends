import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocalComponent} from "src/app/local/local.component";

const routes: Routes = [
  { path: '',   redirectTo: '/local', pathMatch: 'full' },
  {
    path: 'local',
    component: LocalComponent,
  },
  {
    path: 'tecnica',
    loadChildren: () => import('ceiba_tecnica/tecnica.module').then(m => m.TecnicaModule),
  },
  {
    path: 'produccion',
    loadChildren: () => import('ceiba_produccion/produccion.module').then(m => m.ProduccionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
