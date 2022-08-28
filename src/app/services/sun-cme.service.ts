import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CME } from '../types/cme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SunCMEService {

  nasaURL = environment.nasaURL;
  apiKey = environment.apiKey;
  isMostAccurate = environment.mostAccurateOnly;
  catalog = environment.catalog;

  constructor(private http: HttpClient) { }

  getCmeData(
    startDate: string, 
    endDate: string, 
    halfAngle: number, 
    speed: number): Observable<CME[]> {
    return this.http.get<CME[]>(
      this.nasaURL + `startDate=` + startDate + `&endDate=`+ endDate + 
      `&halfAngle=` + halfAngle + `&speed=`+ speed + this.apiKey);
  }

}
