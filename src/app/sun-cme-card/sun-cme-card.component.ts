import { Component, Input, OnInit} from '@angular/core';
import { CME } from '../types/cme';
import { SunCMEService } from '../services/sun-cme.service';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-sun-cme-card',
  templateUrl: './sun-cme-card.component.html',
  styleUrls: ['./sun-cme-card.component.scss']
})
export class SUNCMECardComponent implements OnInit {

  constructor(private SunCMEService: SunCMEService, private route: ActivatedRoute) {
    this.cmeData;
  }
  
  @Input()
  cmeData!: CME[];
  cmeList!: CME[];
  fileName = 'ExcelSheet.xlsx';
  myStartDate = "";
  myEndDate = "";
  myHalfAngle = 0;
  mySpeed = 0;

  ngOnInit(): void { }

  getCME(startDate: string, endDate: string, halfAngle: number, speed: number): void {
    this.SunCMEService.getCmeData(startDate, endDate, halfAngle, speed)
    .subscribe(cmeList => this.cmeData = cmeList)
  }
  
  searchCME(data:{startDate: string, endDate: string, halfAngle: number, speed: number}) {
    this.getCME(data.startDate, data.endDate, data.halfAngle, data.speed);
    this.myStartDate = data.startDate;
    this.myEndDate = data.endDate;
    this.myHalfAngle = data.halfAngle;
    this.mySpeed = data.speed;
  }

  exportExcel(): void {
    // pass table ID
    let element = document.getElementById('allData');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // save to file
    XLSX.writeFile(workbook, this.fileName);
  }

}
