import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl (null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.required),
    country: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl('1'),
    experience: new FormControl(''),
    entryDate: new FormControl(''),
    isPermanent: new FormControl(false),
    isTemporary: new FormControl(false)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      country: '',
      address: '',
      gender: '1',
      experience: '',
      entryDate: '',
      isPermanent: false,
      isTemporary: false
    });
  }
}
