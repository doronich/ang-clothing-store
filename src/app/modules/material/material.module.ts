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
  MatTableModule,
  MatSlideToggleModule
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
    MatTableModule,
    MatSlideToggleModule
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
    MatTableModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
