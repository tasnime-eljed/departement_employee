package com.example.departement_employee.restcontrollers;

import com.example.departement_employee.entities.Employee;
import com.example.departement_employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @RestController
    @RequestMapping("/api")
    @CrossOrigin
    @AllArgsConstructor
    public class EmployeeRESTController {

       // @Autowired
        private final EmployeeService employeeService;

        @GetMapping()
        public List<Employee> getAllEmployees() {
            return employeeService.getAllEmployees();
        }

        @GetMapping("/{id}")
        public Employee getEmployeeById(@PathVariable("id") Long id) {
            return employeeService.getEmployee(id);
        }

        @PostMapping()
        public Employee createEmployee(@RequestBody Employee employee) {
            return employeeService.saveEmployee(employee);
        }

        @PutMapping()
        public Employee updateEmployee(@RequestBody Employee employee) {
            return employeeService.updateEmployee(employee);
        }
        @DeleteMapping("/{id}")
        public void deleteEmployee(@PathVariable("id") Long id) {
            employeeService.deleteEmployeeById(id);
        }
        @GetMapping("/employeesdep/{idDep}")
        public List<Employee> getEmployeesByDepartementId(@PathVariable("idDep") Long idDep) {
            return employeeService.findByDepartementIdDepartement(idDep);
        }
}
