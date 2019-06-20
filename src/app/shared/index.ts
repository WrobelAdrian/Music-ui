import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {RouterModule} from '@angular/router';

export const BaseComponents = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  AngularMaterialModule,
  RouterModule
];

export {
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  AngularMaterialModule
};
