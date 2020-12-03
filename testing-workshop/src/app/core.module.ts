import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GridModule } from 'carbon-components-angular/grid';

@NgModule({
  imports: [
    GridModule,
    HttpClientModule,
  ],
})
export class CoreModule { }
