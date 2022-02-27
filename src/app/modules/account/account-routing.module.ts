import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
