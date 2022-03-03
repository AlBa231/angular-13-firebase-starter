import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCustomModule } from './mat-custom.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const reExportModules = [CommonModule, MatCustomModule, FlexLayoutModule];

@NgModule({
  declarations: [],
  imports: [...reExportModules],
  exports: [...reExportModules],
})
export class SharedModule {}
