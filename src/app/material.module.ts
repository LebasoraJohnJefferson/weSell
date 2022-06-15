import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatPasswordStrengthModule
  ]
})
export class MaterialModule { }
