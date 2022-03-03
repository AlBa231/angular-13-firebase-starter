import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TemplateComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
