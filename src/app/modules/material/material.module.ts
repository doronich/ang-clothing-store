import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";

@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule, MatOptionModule, MatSelectModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule, MatOptionModule, MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
