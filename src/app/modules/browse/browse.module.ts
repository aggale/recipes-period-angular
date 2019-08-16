import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'

import { BrowseComponent } from './pages/browse/browse.component'

@NgModule({
  declarations: [
    BrowseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class BrowseModule { }
