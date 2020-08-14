import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  displayedColumns: string[] = ['氏名', 'メール', '電話番号', '国名', '現住所', '経験','入社日'];

  constructor() { }

  ngOnInit(): void {
  }

}
