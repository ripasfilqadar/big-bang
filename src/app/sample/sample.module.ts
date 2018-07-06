import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './components/sample/sample.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SampleComponent, SampleFormComponent]
})
export class SampleModule { }
