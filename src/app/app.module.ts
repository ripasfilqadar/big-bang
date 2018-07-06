import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { WingModule } from './wing/wing.module'
import { CrudModule } from './crud/crud.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WingModule,
    CrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
