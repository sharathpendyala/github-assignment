import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as feather from 'feather-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { UsersComponent } from './users/users.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProducteditComponent } from './productedit/productedit.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    CardComponent,
    DashboardComponent,
    UsersComponent,
    UserdisplayComponent,
    EditComponent,
    UsercomponentComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    ProductdisplayComponent,
    ProducteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule {
  ngAfterViewInit() {
    feather.replace();
  }

 }
