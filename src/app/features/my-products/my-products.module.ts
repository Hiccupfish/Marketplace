import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MyProductsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [MyProductsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedModule]
})
export class MyProductsModule {}
