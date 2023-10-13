import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'candidatos',
    loadChildren: () =>
        import('./pages/cadastro-candidato/candidato.module').then((m) => m.CandidatoModule),

  },
  {path: '', redirectTo: '/candidatos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
