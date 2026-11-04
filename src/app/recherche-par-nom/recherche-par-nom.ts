import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee';
import { SearchFilterPipe } from '../search-filter-pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, DatePipe, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {

  employees: Employee[] = [];      // liste affichée (filtrée par keyup)
  allEmployees: Employee[] = [];   // liste complète, jamais modifiée
  searchTerm: string = '';         // texte du pipe

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.listeEmployees().subscribe(emps => {
      this.allEmployees = emps;
      this.employees = emps;
    });
  }

  onKeyUp(filterText: string): void {
    this.employees = this.allEmployees.filter(e =>
      (e.nomComplet ?? '').toLowerCase().includes(filterText.toLowerCase())
    );
  }

        //keyup : tu écoutes le clavier et tu modifies les données.
       //pipe : tu laisses le template transformer les données à l’affichage
}
