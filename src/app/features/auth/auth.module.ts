import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthFormComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}