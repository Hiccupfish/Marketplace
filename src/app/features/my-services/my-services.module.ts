import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthGuard } from '../../core/guards/auth.guard';
import { MyServicesComponent } from './pages/my-services/my-services.component';

const routes: Routes = [
  {
    path: '',
    component: MyServicesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    MyServicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MyServicesModule { }
