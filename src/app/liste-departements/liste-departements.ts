import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departement.model';
import { EmployeeService } from '../services/employee';
import { UpdateDepartement } from '../update-departement/update-departement';

@Component({
  selector: 'app-liste-departements',
  imports: [UpdateDepartement],
  templateUrl: './liste-departements.html',
  styles: ``
})
export class ListeDepartements implements OnInit {

  departements: Departement[] = [];
  updatedDep: Departement = { nomDepartement: '', descriptionDepartement: '' };
  ajout: boolean = true;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.chargerDepartements();
  }

  chargerDepartements(): void {
    this.employeeService.listeDepartements().subscribe(deps => {
      console.log(deps);
      this.departements = deps._embedded.departements;
    });
  }

  departementUpdated(dep: Departement): void {
  const requete = this.ajout
    ? this.employeeService.ajouterDepartement(dep)
    : this.employeeService.updateDepartement(dep);

  requete.subscribe(() => {
    this.updatedDep = { nomDepartement: '', descriptionDepartement: '' };
     this.ajout = true;// remettre le formulaire en mode ajout après l'enregistrement
    this.chargerDepartements();
  });
}

updateDep(dep: Departement): void {
  this.updatedDep = { ...dep }; // copie de dep : le formulaire modifie la copie, pas la ligne du tableau
   //crie une copie de l'objet dep pour éviter les modifications directes
  this.ajout = false;//mettre le formulaire en mode modification
  //...dep est l'opérateur de décomposition (spread operator) qui permet de copier les propriétés de l'objet dep dans un nouvel objet
  //et dans ce cas (this.updatedDep = dep;   // PAS de copie)
  //Si tu tapes dans le formulaire, la ligne du tableau change en direct, même si tu n’enregistres pas.
}
annuler(): void {
  this.updatedDep = { nomDepartement: '', descriptionDepartement: '' };
  this.ajout = true;
}
}
