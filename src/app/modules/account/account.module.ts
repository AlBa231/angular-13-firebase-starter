import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    LoginComponent,
    TemplateComponent
  ],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
