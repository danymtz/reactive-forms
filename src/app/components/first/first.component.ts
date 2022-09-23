import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      name: new FormControl('Dany'),
      email: new FormControl('dany@gmail.com'),
      password: new FormControl('dany123')
    })
  }

  onSubmit(){
    console.log("Submit");
    console.log(this.formLogin);
    console.log(this.formLogin.get('name')?.value);
    console.log(this.formLogin.get('email')?.value);
    console.log(this.formLogin.get('password')?.value);  
  }

}
