import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  closeResult: string = '';

  @Output()
  closeForm: EventEmitter<void> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { modalDialogClass: 'dark-modal' });
  }
}
