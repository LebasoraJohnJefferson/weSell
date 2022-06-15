import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { RegisterComponent } from './register/register.component';

const routes:Routes = [
  { path:"" , component: AuthPageComponent},
  { path:"register" , component: RegisterComponent},
  {path:"**", redirectTo:"/"}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
