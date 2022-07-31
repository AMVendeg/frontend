import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  closeResult: string = '';

  constructor(private offcanvasService: NgbOffcanvas) { }

  openCustomPanel(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {position: 'end'})
  }

  ngOnInit(): void {
  }

}
