import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  isSignUp:boolean= false;
  signInForm!:FormGroup;
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.signInForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    });

    this.signUpForm = this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      passwordGroup:this.fb.group({
        password:['',[Validators.required,Validators.minLength(8)]],
        confirmPassword:['',[Validators.required]]
      },{
        validator:this.passwordMatchValidator
      })
    
    })
  }

//  passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;

//     if (password !== confirmPassword) {
//       form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
//     } else {
//       form.get('confirmPassword')?.setErrors(null);
//     }
//   }

  passwordMatchValidator(c: AbstractControl): { [key: string]: boolean } | null {
    const password = c.get('password');
    const confirmPassword = c.get('confirmPassword');
  
    if (password?.pristine || confirmPassword?.pristine) {
      return null;
    }
  
    if (password?.value === confirmPassword?.value) {
      return null;
    }
    return { match: true };
  }


  toggleSignInForm() {
    this.isSignUp=!this.isSignUp;
  }

  submitSignIn(){
    console.log(this.signInForm);
    console.log('Saved:' + JSON.stringify(this.signInForm?.value));
  }

  submitSignUp(){
    console.log(this.signUpForm);
    console.log('Saved:' + JSON.stringify(this.signUpForm?.value));
  }
}
