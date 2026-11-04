import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-employees',
  imports: [DatePipe, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,public authService: Auth) {}

  ngOnInit(): void {
    this.chargerEmployees();
  }

  chargerEmployees(): void {
    this.employeeService.listeEmployees().subscribe(emps => {
      this.employees = emps;
    });
  }

  supprimerEmployee(e: Employee): void {
    const conf = confirm('Êtes-vous sûr ?');
    if (conf) {
      this.employeeService.supprimerEmployee(e.idEmployee!).subscribe(() => {
        this.chargerEmployees();
      });
    }
  }
}
