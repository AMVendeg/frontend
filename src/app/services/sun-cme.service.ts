import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// types

@Injectable({
  providedIn: 'root'
})
export class SunCMEService {

  baseURL = environment.baseURL;
  apiKey = environment.apiKey;
  mostAccurateOnly = environment.mostAccurateOnly;
  catalog = environment.catalog;

  constructor(private http: HttpClient) { }
}
