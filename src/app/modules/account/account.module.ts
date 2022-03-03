import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [LoginComponent, TemplateComponent],
  imports: [SharedModule, AccountRoutingModule],
})
export class AccountModule {}
