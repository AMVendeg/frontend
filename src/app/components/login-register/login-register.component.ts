import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  closeResult: string = '';
  active = 1;

  @Output()
  regForm: EventEmitter<{firstName: string, lastName: string, email: string, password: string, repeatPassword: string}> = 
  new EventEmitter<{firstName: string, lastName: string, email: string, password: string, repeatPassword: string}>();

  loginForm: EventEmitter<{email: string, password: string}> = 
  new EventEmitter<{email: string, password: string}>();

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }


  onLogin(form: NgForm): void {
    console.log(form.value);
    this.loginForm.emit({email: this.email, password: this.password});
    this.email = '';
    this.password = '';
  }

  onRegister(form: NgForm): void {
    console.log(form.value);
    const firstName = this.firstName;
    this.regForm.emit({firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, repeatPassword: this.repeatPassword});
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.repeatPassword = '';
  }
}
