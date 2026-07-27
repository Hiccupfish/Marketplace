import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent],
  imports: [RouterModule],
  exports: [AuthLayoutComponent, MainLayoutComponent]
})
export class LayoutModule {}
