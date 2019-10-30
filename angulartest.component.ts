import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-angulartest',
  templateUrl: './angulartest.component.html',
  styleUrls: ['./angulartest.component.scss']
})
export class CreateComponent implements OnInit {
form: FormGroup;
  constructor(private fb: FormBuilder) {
   }

  ngOnInit() {
    this.form = this.fb.group( {
      firstname: [null , Validators.compose ( [ Validators.required])] ,
      number: [null , Validators.compose ( [ Validators.required ] )],
      number1: [null , Validators.compose ( [ Validators.required ] )],
      nation: [null , Validators.compose ( [ Validators.required])] ,
      date: [null , Validators.compose ( [ Validators.required ] )],
      address: [null , Validators.compose ( [ Validators.required])]
    } );
  }

}
