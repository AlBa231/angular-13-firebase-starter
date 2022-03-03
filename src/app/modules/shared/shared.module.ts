import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCustomModule } from './mat-custom.module';

const reExportModules = [CommonModule, MatCustomModule];

@NgModule({
  declarations: [],
  imports: [...reExportModules],
  exports: [...reExportModules],
})
export class SharedModule {}
