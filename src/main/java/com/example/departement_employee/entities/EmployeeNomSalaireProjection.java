package com.example.departement_employee.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "nomSalaire", types = { Employee.class })
public interface EmployeeNomSalaireProjection {

    public String getNomComplet();

    public Double getSalaire();
}