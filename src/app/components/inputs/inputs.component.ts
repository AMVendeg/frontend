import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  @Output()
  data: EventEmitter<{startDate: string, endDate: string, speed: number, halfAngle: number}> =
  new EventEmitter<{startDate: string, endDate: string, speed: number, halfAngle: number}>();

  startDate: string = '';
  endDate: string = '';
  speed: number = 0;
  halfAngle: number = 0;
  isMostAccurate: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    const startDate = this.startDate;
    const endDate = this.endDate;
    const halfAngle = this.halfAngle;
    const speed = this.speed;

    this.data.emit({startDate: this.startDate, endDate: this.endDate, speed: this.speed, halfAngle: this.halfAngle});
    this.startDate = '';
    this.endDate = '';
    this.halfAngle = 0;
    this.speed = 0;
  }

}
