import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];

  constructor() {
    this.employees = [];
  }

  insert(e: Employee): void {
    this.employees.push(e);
    console.log(this.employees);
  }

  getAll(): Employee[] {
    return this.employees;
  }
}
