import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { StoreModules } from './app.store';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    StoreModules,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    HttpModule

  ],
  providers: [
      ApiService,
      UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
