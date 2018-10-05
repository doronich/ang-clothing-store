import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule } from "@angular/material";

@NgModule({
  imports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule
  ],
  exports: [
    MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
