import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatRadioModule,
  MatBadgeModule
} from "@angular/material";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatBadgeModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule, MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatBadgeModule
  ],
  declarations: []
})
export class MaterialModule { }
