import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonLandingComponent } from './pages/pokemon-landing/pokemon-landing.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';
import { TablesComponent } from './pages/tables/tables.component';
import { TagInputContainerComponent } from './pages/tag-input-container/tag-input-container.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonLandingComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  },
  {
    path: 'tag-input',
    component: TagInputContainerComponent
  },
  {
    path: 'testing-components',
    loadChildren: () => import('./pages/testing/testing.module').then(m => m.TestingModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
