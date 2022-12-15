import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '356gbbyb',
      name: 'Seyton logh',
      email: 'Seytonlogh@email.ui',
      phone: 6789542365,
      salary: 908,
      department: 'Loggers'
    },
    {
      id: '9087gbbyb',
      name: 'Scholar lowe',
      email: 'Scholarlowe@email.ui',
      phone: 6789552054,
      salary: 908,
      department: 'Loggers'
    },
    {
      id: '4123gbbyb',
      name: 'Cincinnati high',
      email: 'Cincinnatihigh@email.ui',
      phone: 76721542365,
      salary: 908,
      department: 'Loggers'
    },
  ]
  constructor() { }

  ngOnInit(): void {

    this.employees
  }

}
