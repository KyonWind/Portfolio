import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContacComponent} from './components/contac/contac.component';
import { CreateComponent} from './components/create/create.component';
import { ProjectComponent} from './components/project/project.component';
import { ErrorComponent} from './components/error/error.component';

const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobreMi', component: AboutComponent},
  {path: 'crear', component: CreateComponent},
  {path: 'proyecto', component: ProjectComponent},
  {path: 'contacto', component: ContacComponent},
  {path: 'error', component: ErrorComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
