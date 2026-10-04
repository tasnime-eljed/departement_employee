package com.example.departement_employee.service;

import com.example.departement_employee.entities.Departement;
import com.example.departement_employee.entities.Employee;

import java.util.List;

public interface EmployeeService {
    Employee saveEmployee(Employee e);

    Employee updateEmployee(Employee e);

    void deleteEmployee(Employee e);

    void deleteEmployeeById(Long id);

    Employee getEmployee(Long id);

    List<Employee> getAllEmployees();
    List<Employee> findByNomComplet(String nom);

    List<Employee> findByNomCompletContains(String nom);

    List<Employee> findByNomSalaire(String nom, Double salaire);

    List<Employee> findByDepartement(Departement departement);

    List<Employee> findByDepartementIdDepartement(Long id);

    List<Employee> findByOrderByNomCompletAsc();

    List<Employee> trierEmployeesNomsSalaires();
}
