import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegisterInterface } from 'src/app/Interface/auth'; 
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isInteract:boolean = false
  isMatch:boolean = false 
  data:RegisterInterface = {id:0,
                            name:'',
                            email:'',
                            password:''}

  profileFrom = this.fb.group({
    userCompleteName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['', [
      Validators.required,
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
   ]]
  })

  constructor(private fb : FormBuilder, private authService:AuthService, private router:Router) { 
    
  }

  
  ngOnInit(): void {
    this.isNotEmptyPassword()
  }
  
  
  onSubmit() {
    let message:String = ''
    this.data = this.profileFrom.value
    this.data['id'] = Math.floor((Math.random() * 100000000) + 1);
    this.authService.RegisterUser(this.data).subscribe((res)=>{
      message = JSON.stringify(Object.values(res)[0])
      console.log(message)
    })
    alert(message)
    if(message == '\"Successfully Registered\"'){
      this.router.navigate(['/'])
    }
    this.profileFrom.patchValue({
      userCompleteName:'',
      email:'',
      password:''
    })
  } 
  
  
  isNotEmptyPassword(){
    this.isInteract = this.profileFrom.value.password.length > 0 ?  true : false
  }

}
