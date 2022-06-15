import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isInteract:boolean = false
  isMatch:boolean = false 

  profileFrom = this.fb.group({
    userCompleteName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
     ]]
  })



  constructor(private fb : FormBuilder) { 
    
  }
  
  ngOnInit(): void {
  }

  isSamePass(){
    if (this.profileFrom.value.confirmPassword.length >0){
      this.isMatch = this.profileFrom.value.confirmPassword == this.profileFrom.value.password ? false : true
    }
  }
  
  
  onSubmit() {
    console.warn(this.profileFrom.value);
  } 
  
  onStrengthChanged(strength: number) {
    this.isInteract = this.profileFrom.value.password.length > 1 ?  true : false
    console.log('password strength = ', strength);
  }

}
