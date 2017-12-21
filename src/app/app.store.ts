import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
// import { reducers } from './';
import { counter } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
const APP_STORES = {

 counter

};

const EFFECTS = [
    AppEffects
];

@NgModule({
  imports: [
    // BrowserModule,
    StoreModule.forRoot(APP_STORES),
    EffectsModule.forRoot(EFFECTS)
  ]
})
export class StoreModules {}