package com.example.departement_employee.service;

import com.example.departement_employee.entities.Departement;
import com.example.departement_employee.entities.Employee;
import com.example.departement_employee.repos.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee e) {
        return employeeRepository.save(e);
    }

    @Override
    public Employee updateEmployee(Employee e) {
        return employeeRepository.save(e);
    }

    @Override
    public void deleteEmployee(Employee e) {
        employeeRepository.delete(e);

    }

    @Override
    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public List<Employee> findByNomComplet(String nom) {
        return employeeRepository.findByNomComplet(nom);
    }

    @Override
    public List<Employee> findByNomCompletContains(String nom) {
        return employeeRepository.findByNomCompletContains(nom);
    }

    @Override
    public List<Employee> findByNomSalaire(String nom, Double salaire) {
        return employeeRepository.findByNomSalaire(nom, salaire);
    }

    @Override
    public List<Employee> findByDepartement(Departement departement) {
        return employeeRepository.findByDepartement(departement);
    }

    @Override
    public List<Employee> findByDepartementIdDepartement(Long id) {
        return employeeRepository.findByDepartementIdDepartement(id);
    }

    @Override
    public List<Employee> findByOrderByNomCompletAsc() {
        return employeeRepository.findByOrderByNomCompletAsc();
    }

    @Override
    public List<Employee> trierEmployeesNomsSalaires() {
        return employeeRepository.trierEmployeesNomsSalaires();
    }
}
