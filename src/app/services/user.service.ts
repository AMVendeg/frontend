import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '..//models/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = environment.baseURL;

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // This is a temporary header in order to be able to use https://my.api.mockaroo.com/tickets and test the feature. Should be deleted in the future.
      'X-API-Key': '60a8d6d0',
    }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/`, this.httpOptions);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`, this.httpOptions);
  }

  create(data: User): Observable<User> {
    return this.http.post(this.baseURL, data);
  }

  update(id: any, data: User): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseURL);
  }
  
  findByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}?email=${email}`);
  }
}