package com.example.departement_employee.entities;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "nomEmp", types = { Employee.class })
    public interface EmployeeProjection {
        public String getNomComplet();
    }
