import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from '../../core/guards/auth.guard';
import { RoleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: MyProductsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['PRODUCT_PROVIDER'] }
  }
];

@NgModule({
  declarations: [MyProductsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedModule]
})
export class MyProductsModule {}
