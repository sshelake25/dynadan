import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ColorPickerModule } from 'ngx-color-picker';
import { CoreEditorComponent } from './core-editor.component';



@NgModule({
  declarations: [
    CoreEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  exports: [
    CoreEditorComponent
  ]
})
export class CoreEditorModule { }
