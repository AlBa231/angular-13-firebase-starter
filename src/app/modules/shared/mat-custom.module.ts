import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

const modulesInUse = [MatCardModule];

@NgModule({
  imports: [...modulesInUse],
  exports: [...modulesInUse],
})
export class MatCustomModule {}
