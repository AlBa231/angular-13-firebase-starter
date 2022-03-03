import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, TemplateComponent],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
