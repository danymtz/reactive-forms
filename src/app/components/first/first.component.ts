import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      name: new FormControl('',[Validators.maxLength(10),Validators.minLength(5), Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      phone: new FormControl('',[Validators.pattern("^[0-9]*$"), Validators.required])
    })
  }

  // Get Data
  onSubmit(){
    console.log("Submit");
    console.log(this.formLogin);
    console.log(this.formLogin.get('name')?.value);
    console.log(this.formLogin.get('email')?.value);
    console.log(this.formLogin.get('password')?.value);  

    this.formLogin.markAsDirty();
    this.formLogin.markAllAsTouched();
    this.markAllAsDirty();

    if (this.formLogin.invalid) return

    // Enviar datos hacia el servidor
  }

  markAllAsDirty(){
    this.formLogin.get('name')?.markAsDirty();
    this.formLogin.get('email')?.markAsDirty();
    this.formLogin.get('password')?.markAsDirty();
    this.formLogin.get('phone')?.markAsDirty();
  }

}
