import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeeService } from '../services/employee';
import { Employee } from '../model/employee.model';
import { Departement } from '../model/departement.model';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, RouterLink, DatePipe],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit {

  currentEmployee: Employee = {};
  departements: Departement[] = [];
  updatedDepId: number | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

 ngOnInit(): void {
  this.employeeService.listeDepartements().subscribe(deps => {
    console.log(deps);
    this.departements = deps._embedded.departements;
  });

  this.employeeService //remplir le formulaire avec les données de l'employé à modifier
    .consulterEmployee(this.activatedRoute.snapshot.params['id'])
    .subscribe(emp => {
      this.currentEmployee = emp;
      this.updatedDepId = emp.departement?.idDepartement ?? null;
    });
}

  updateEmployee(): void {
    this.currentEmployee.departement = this.departements.find( //mettre à jour le département de l'employé avec le département sélectionné
      dep => dep.idDepartement == this.updatedDepId
    );

    this.employeeService.updateEmployee(this.currentEmployee).subscribe(() => {
      this.router.navigate(['/employees']); //redirection vers la liste des employés après la mise à jour
    });
  }

  onDateChange(value: string): void {
    this.currentEmployee.dateEmbauche = value
      ? new Date(value + 'T00:00:00')
      : undefined;
  }
}
