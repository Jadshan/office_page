import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeedata: any;

  constructor(private service: EmployeeService) {
    this.LoadEmployee();
  }

  ngOnInit(): void {}
  LoadEmployee() {
    this.service.LoadEmployee().subscribe((result) => {
      this.employeedata = result;
      console.log(this.employeedata);
    });
  }
}
