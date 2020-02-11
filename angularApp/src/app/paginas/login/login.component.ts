import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor( private builder: FormBuilder) {
    console.trace('LoginComponent constructor');

    // construir formulario
    this.formulario = this.builder.group({

       // definir los FormControl == inputs [ value, validaciones ]
      nombre : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100) ]],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8) ]]

    });


  }// constructor

  ngOnInit() {
      console.trace('LoginComponent ngOnInit');

  }// ngOnInit


  enviar( values: any ) {
    console.trace('Submit formulario %o', values);

  }// enviar


}// LoginComponent
