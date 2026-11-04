import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { Departement } from '../model/departement.model';
import { EmployeeService } from '../services/employee';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit {

  newEmployee: Employee = {};
  dateEmbaucheInput = '';

  departements: Departement[] = [];
  newIdDep: number | null = null;

  constructor(private employeeService: EmployeeService, private router: Router) {}

 ngOnInit(): void {
  this.employeeService.listeDepartements().subscribe(deps => {
    console.log(deps);
    this.departements = deps._embedded.departements;
  });
}

  onDateChange(value: string): void {
    this.dateEmbaucheInput = value;
    this.newEmployee.dateEmbauche = value
      ? new Date(value + 'T00:00:00')
      : undefined;
  }

  addEmployee(): void { //mettre à jour le département de l'employé avec le département sélectionné
    this.newEmployee.departement = this.departements.find(
      dep => dep.idDepartement == this.newIdDep
    );

    this.employeeService.ajouterEmployee(this.newEmployee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
