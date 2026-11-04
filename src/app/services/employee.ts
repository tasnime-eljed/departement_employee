import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Departement } from '../model/departement.model';
import { environment } from '../../environments/environment';
import { DepartementWrapper } from '../model/departement-wrapper.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  apiURL: string = environment.apiURL;
  apiURLDep: string = environment.apiURLDep;

  constructor(private http: HttpClient) {}

  listeEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL);
  }

  ajouterEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL, employee, httpOptions);
  }

  supprimerEmployee(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterEmployee(id: number): Observable<Employee> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Employee>(url);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiURL, employee, httpOptions);
  }

 listeDepartements(): Observable<DepartementWrapper> {
  return this.http.get<DepartementWrapper>(this.apiURLDep);
}

rechercherParDepartement(idDep: number): Observable<Employee[]> {
  const url = `${this.apiURL}/employeesdep/${idDep}`;
  return this.http.get<Employee[]>(url);
}

rechercherParNom(nom: string): Observable<Employee[]> {
  const url = `${this.apiURL}/employeesByName/${nom}`;
  return this.http.get<Employee[]>(url);
}
ajouterDepartement(dep: Departement): Observable<Departement> {
  return this.http.post<Departement>(this.apiURLDep, dep, httpOptions);
}
updateDepartement(dep: Departement): Observable<Departement> {
  const url = `${this.apiURLDep}/${dep.idDepartement}`;
  return this.http.put<Departement>(url, dep, httpOptions);
}
}
