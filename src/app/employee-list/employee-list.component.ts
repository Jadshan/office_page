import { Component, OnInit } from '@angular/core';

import { EmployeesService } from './employees.service';
import { Worker } from './models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(public employee: EmployeesService) {}
  workers: Worker[] = [];
  ngOnInit(): void {
    this.employee
      .getWorkers()
      .subscribe((result: Worker[]) => (this.workers = result));
  }
}
export class btn {}
