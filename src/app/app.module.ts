import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContacComponent } from './components/contac/contac.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    CreateComponent,
    ContacComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
