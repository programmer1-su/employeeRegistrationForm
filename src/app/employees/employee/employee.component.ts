import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  experiences = [
    {id: 1, value: '1年'},
    {id: 2, value: '2年'},
    {id: 3, value: '3年'},
    {id: 4, value: '4年'},
    {id: 5, value: '5年'},
    {id: 6, value: '5年以上'}
  ]

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
