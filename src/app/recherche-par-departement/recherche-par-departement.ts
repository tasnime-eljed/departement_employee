import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { Departement } from '../model/departement.model';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-recherche-par-departement',
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-departement.html',
  styles: ``
})
export class RechercheParDepartement implements OnInit {

  employees: Employee[] = [];
  departements: Departement[] = [];
  idDepartement: number | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {//get the list of departments from the backend
    this.employeeService.listeDepartements().subscribe(deps => {
      this.departements = deps._embedded.departements;
    });
  }

  onChange(id: number): void {//mettre à jour la liste des employés en fonction du département sélectionné
    this.idDepartement = id;
    this.employeeService.rechercherParDepartement(id).subscribe(emps => {
      this.employees = emps;
    });
  }
}
