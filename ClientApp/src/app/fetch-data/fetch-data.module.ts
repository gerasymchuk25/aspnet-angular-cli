import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FetchDataComponent } from './fetch-data.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FetchDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FetchDataComponent, pathMatch: 'full' }
    ])
  ]
})
export class FetchDataModule {
}
