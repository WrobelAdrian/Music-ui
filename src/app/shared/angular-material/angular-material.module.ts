import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatSliderModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule {
}
