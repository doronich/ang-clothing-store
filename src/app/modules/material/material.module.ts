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
  MatBadgeModule,
  MatTableModule
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
    MatBadgeModule,
    MatTableModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule, MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatBadgeModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
