import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './box/box.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    BoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BoxComponent
  ],
})

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BoxComponent,
    },
  ])],
  exports: [RouterModule]
})
export class SpecificModule { }
