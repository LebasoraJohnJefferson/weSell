import { Injectable } from '@angular/core';
import { RegisterInterface,LoginInterface,MessageInterface } from '../Interface/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }

  RegisterUser(data:RegisterInterface):Observable<MessageInterface[]>{
    let Context = of(<any>[])
    let isEmail = true
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.map((user:RegisterInterface)=>{
      if(user.email == data.email){
        Context = of({
          message:"Email Already Exist"
        })
        isEmail = false
        return
      }
    })
    if(isEmail){
      users.push(data)
      localStorage.setItem("users",JSON.stringify(users))
      Context = of({
        message:"Successfully Registered"
      })
    }
    return Context
  }

  // LoginUser():Observable <LoginInterface>{
  //   return
  // }
}
