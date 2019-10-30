import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createtest',
  templateUrl: './createtest.component.html',
  styleUrls: ['./createtest.component.scss']
})
export class CreatetestComponent implements OnInit {
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
