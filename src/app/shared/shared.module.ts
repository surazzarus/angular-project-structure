import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PipesPipe } from './pipes/pipes.pipe';

@NgModule({
  declarations: [LoadingSpinnerComponent, PipesPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
