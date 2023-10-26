import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { EditComponent } from './edit/edit.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProducteditComponent } from './productedit/productedit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/user',
    component: UsercomponentComponent,
    children: [
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: ':id',
        component: UserdisplayComponent,
      },
    ],
  },
  {
    path:"register",
    component:SignupComponent
  },
  {
    path:"login",
    component:SignupComponent
  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path: 'products/product',
    component: UsercomponentComponent,
    children: [
      {
        path: 'edit/:id',
        component: ProducteditComponent,
      },
      {
        path: ':id',
        component: ProductdisplayComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {}
}
