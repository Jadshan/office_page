import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Worker } from './models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  Employees = [
    {
      id: 1,
      name: 'Emp1',
      email: 'emp1@gmail.com',
      phone: 776554581,
    },
    {
      id: 2,
      name: 'Emp2',
      email: 'emp2@gmail.com',
      phone: 776554582,
    },
    {
      id: 3,
      name: 'Emp3',
      email: 'emp3@gmail.com',
      phone: 776554583,
    },
    {
      id: 4,
      name: 'Emp4',
      email: 'emp4@gmail.com',
      phone: 776554584,
    },
  ];

  private url = 'Worker';

  constructor(private http: HttpClient) {}

  public getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(`${environment.apiUrl}/${this.url}`);
  }
}
