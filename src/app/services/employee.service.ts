import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiurl_emp = 'https://localhost:7185/api/Employs';
  constructor(private http: HttpClient) {}
  LoadEmployee() {
    return this.http.get(this.apiurl_emp);
  }
  Employeebycode(code: any) {
    return this.http.get(this.apiurl_emp + '/' + code);
  }
  RemoveEmployeebycode(code: any) {
    return this.http.delete(this.apiurl_emp + '/' + code);
  }
  SaveEmployee(inputdata: any) {
    return this.http.post(this.apiurl_emp, inputdata);
  }
}
