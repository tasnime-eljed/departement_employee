package com.example.departement_employee;

import java.util.Date;
import java.util.List;

import com.example.departement_employee.entities.Departement;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.departement_employee.entities.Employee;
import com.example.departement_employee.repos.EmployeeRepository;

@SpringBootTest
class DepartementEmployeeApplicationTests {

    @Autowired
    private EmployeeRepository employeeRepository;

/*
    @Test
    public void testCreateEmployee() {

        Employee emp = new Employee(
            "tasnime eljed ",
            5500.500,
            new Date()
        );

        employeeRepository.save(emp);
    }*/

    @Test
    public void testFindEmployee()
    {
        Employee e = employeeRepository.findById(1L).get();
        System.out.println(e);
    }
    @Test
    public void testUpdateEmployee() {
        Employee e = employeeRepository.findById(1L).get();

        e.setSalaire(3000.0);

        employeeRepository.save(e);
    }
    @Test
    public void testListerTousEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

        @Test
        public void testDeleteEmployee() {
            employeeRepository.deleteById(1L);
        }

    @Test
    public void testFindByNomComplet() {

        List<Employee> employees =
                employeeRepository.findByNomComplet("tasnime eljed");

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

    @Test
    public void testFindByNomCompletContains() {

        List<Employee> employees =
                employeeRepository.findByNomCompletContains("alla");

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

    @Test
    public void testFindByNomSalaire2() {

        List<Employee> employees =
                employeeRepository.findByNomSalaire("alla", 3500.5);

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

    @Test
    public void testFindByDepartement() {

        Departement dep = new Departement();

        dep.setIdDepartement(2L);

        List<Employee> employees =
                employeeRepository.findByDepartement(dep);

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

    @Test
    public void testFindByDepartementIdDepartement() {

        List<Employee> employees =
                employeeRepository.findByDepartementIdDepartement(1L);

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

    @Test
    public void testFindByOrderByNomCompletAsc() {

        List<Employee> employees =
                employeeRepository.findByOrderByNomCompletAsc();

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

    @Test
    public void testTrierEmployeesNomsSalaires() {

        List<Employee> employees =
                employeeRepository.trierEmployeesNomsSalaires();

        for (Employee e : employees) {
            System.out.println(e);
        }
    }

}